if (typeof(SiebelAppFacade.SamoksePR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.SamoksePR");
    define("siebel/custom/SamoksePR", ["siebel/jqgridrenderer"], function()
    {
        SiebelAppFacade.SamoksePR = (function()
        {

            function SamoksePR(pm)
            {
                SiebelAppFacade.SamoksePR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(SamoksePR, SiebelAppFacade.JQGridRenderer);

            SamoksePR.prototype.Init = function()
            {
                SiebelAppFacade.SamoksePR.superclass.Init.apply(this, arguments);
				
            }

            SamoksePR.prototype.ShowUI = function()
            {
				SiebelAppFacade.SamoksePR.superclass.ShowUI.apply(this, arguments);
				var pm = this.GetPM();
                var recordSet = pm.Get("GetRecordSet");			
				//SiebelJS.Log(recordSet.length);000001111//
				var ph = "s_" + pm.Get("GetFullId") + "_div";
				var applet = pm.Get("GetFullId");
				$( "#" + applet).addClass('newapplet');
				SiebelJS.Log('***' + applet);
				var applet2 = $("#" + ph); 
				$(".siebui-applet-header", "#" + ph).addClass('tline4');/*Добавили класс к диву шапки*/
				$(".siebui-applet-title", "#" + ph).first().before('<div class="tline" id="newmenu1"></div>');/*Левый Див с черточкой*/
				$(".siebui-applet-title", "#" + ph).last().after('<div class="tline2" id="newmenu2"></div>');/*Правый Див с черточкой*/
				var menu2 = $('.siebui-btn-grp-applet', "#" + ph).children().remove("span").html(); /*Шестеренка*/
				$(".siebui-applet-header", "#" + ph).append('<div class="tline3" id="newmenu3"><div class="tline5" id="newmenu5"></div><div class="tline6" id="newmenu6">' + menu2 +'</div></div>'); /* див с рамками*/
				//debugger;			
				$(".siebui-applet-title", "#" + ph).addClass('siebui-applet-title1').removeClass('siebui-applet-title'); /*Заголовок*/
				var w1 = $(".siebui-applet-header", "#" + ph).width();
				var w2 = $(".siebui-applet-title1", "#" + ph).outerWidth( true );
				var w3 = $(".tline", "#" + ph).outerWidth( true );
				var w4 = w1 - w2 - w3-1;
				$(".tline2", "#" + ph).width(w4);/*Ширина правого дива с черточкой*/
				$('.siebui-btn-grp-applet', "#" + ph).css({"display":"none"}); /*Спрятали лишнее от кнопок*/
				$('.AppletButtons.siebui-applet-buttons', "#" + ph).css({"display":"none"}); /*Спрятали поиск*/
				$('.ui-jqgrid-htable', "#" + ph).css({"display":"none"});/*Спрятали заголовок таблицы*/
				$(".ui-jqgrid-btable", "#" + ph).addClass('tbl-a'); /*Таблица*/
				$('[aria-selected="true"]', "#" + ph).addClass('tbl-td').removeClass('ui-state-highlight'); /*Выбранная строка*/

				//$(".siebui-appletmenu-btn", "#" + ph).addClass('siebui-appletmenu-btn3'); /* кнопка - Так не работает, хотя должно*/
				$(".miniBtnUIC", "#" + ph).children().after().addClass('siebui-appletmenu-btn2'); /*Внезапно*/
				$('.ui-state-default.ui-jqgrid-pager.ui-corner-bottom.siebui-applet-footer', "#" + ph).hide();	/*footer*/
				//$('span:last-Child', '.ui-state-default.ui-jqgrid-pager.ui-corner-bottom.siebui-applet-footer', "#" + ph).remove(); /*footer*/
				// End
            }

            SamoksePR.prototype.BindData = function(bRefresh)
            {
				
			   SiebelAppFacade.SamoksePR.superclass.BindData.apply(this, arguments);
            }

            SamoksePR.prototype.BindEvents = function()
            {
                SiebelAppFacade.SamoksePR.superclass.BindEvents.apply(this, arguments);
            }

            SamoksePR.prototype.EndLife = function()
            {
                SiebelAppFacade.SamoksePR.superclass.EndLife.apply(this, arguments);
            }

            return SamoksePR;
        }());
        return "SiebelAppFacade.SamoksePR";
    })
}