using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class УправлениеПечатьюOOWriterКлиент
	{
		////////////////////////////////////////////////////////////////////////////////
		// Open Office Writer - специфичные функции
		// Описание ссылки на печатную форму и макет
		// Структура с полями:
		// ServiceManager - сервис менеджер, сервис open office
		// Desktop - приложение Open Office (сервис UNO)
		// Document - документ (печатная форма)
		// Тип - тип печатной формы ("ODT")
		//
		////////////////////////////////////////////////////////////////////////////////
		// Экспортные функции
		// Инициализация печатной формы: создается COM - объект,
		// ему устанавливаются свойства.
		//

		public object ИнициализироватьПечатнуюФормуOOWriter(/**/)
		{
			//Параметры = ПолучитьComSafeArray();
			//Параметры.SetValue(0, СвойствоЗначение(ServiceManager, "Hidden", Истина));
			//Document = Desktop.LoadComponentFromURL("private:factory/swriter", "_blank", 0, Параметры);
			//Document.getCurrentController().getFrame().getContainerWindow().setVisible(Ложь);
			/*// Подготавливаем ссылку на макет
*/
			//Handler = Новый Структура("ServiceManager,Desktop,Document,Тип");
			//Handler.ServiceManager = ServiceManager;
			//Handler.Desktop = Desktop;
			//Handler.Document = Document;
			return null;
		}
		// Возвращает структуру с макетом печатной формы
		//
		// Параметры:
		// ДвоичныеДанныеМакета - ДвоичныеДанные - двоичные данные макета
		// Возвращаемое значение:
		// структура - ссылка макет
		//

		public object ПолучитьМакетOOWriter(/*знач ДвоичныеДанныеШаблона, ИмяВременногоФайла*/)
		{
			//Handler = Новый Структура("ServiceManager,Desktop,Document,ИмяФайла");
			//ИмяВременногоФайла = ПолучитьИмяВременногоФайла("ODT");
			//ДвоичныеДанныеШаблона.Записать(ИмяВременногоФайла);
			//Параметры = ПолучитьComSafeArray();
			//Параметры.SetValue(0, СвойствоЗначение(ServiceManager, "Hidden", Истина));
			//Document = Desktop.LoadComponentFromURL("file:///" + ИмяВременногоФайла, "_blank", 0, Параметры);
			//Document.getCurrentController().getFrame().getContainerWindow().setVisible(Ложь);
			/*// Подготавливаем ссылку на макет
*/
			//Handler.ServiceManager = ServiceManager;
			//Handler.Desktop = Desktop;
			//Handler.Document = Document;
			//Handler.ИмяФайла = ИмяВременногоФайла;
			return null;
		}
		// Закрывает макет печатной формы и затирает ссылки на COM объект
		//

		public object ЗакрытьСоединение(/*Handler, знач ЗакрытьПриложение*/)
		{
			if(true/*ЗакрытьПриложение*/)
			{
				//Handler.Document.Close(0);
			}
			//Handler.Document = Неопределено;
			//Handler.Desktop = Неопределено;
			//Handler.ServiceManager = Неопределено;
			//ScriptControl = Неопределено;
			if(true/*Handler.Свойство("ИмяФайла")*/)
			{
				//УдалитьФайлы(Handler.ИмяФайла);
			}
			//Handler = Неопределено;
			return null;
		}
		// Устанавливает свойство видимости у приложения OO Writer
		// Handler - ссылка на печатную форму
		//

		public void ПоказатьДокументOOWriter(/*знач Handler*/)
		{
			//ContainerWindow = Handler.Document.getCurrentController().getFrame().getContainerWindow();
			//ContainerWindow.setVisible(Истина);
			//ContainerWindow.setFocus();
		}
		////////////////////////////////////////////////////////////////////////////////
		// Блок функций для работы с макетом
		// Получает область из макета.
		// Параметры
		// Handler - ссылка на макет
		// ИмяОбласти - имя области в макете
		// СмещениеНачало - смещение относительно начала области
		//					смещение по умолчанию: 1 - означает что область берется без символа
		//					перевода строки, за операторной скобкой открытия области
		// СмещениеОкончание - смещение относительно окончания области,
		//					смещение по умолчанию: -11 - означает что область берется без символа
		//					перевода строки, перед операторной скобкой закрытия области
		//

		public object ПолучитьОбластьМакета(/*знач Handler, знач ИмяОбласти*/)
		{
			//Результат = Новый Структура("Document,Start,End");
			//Результат.Start = ПолучитьПозициюНачалаОбласти(Handler.Document, ИмяОбласти);
			//Результат.End   = ПолучитьПозициюОкончанияОбласти(Handler.Document, ИмяОбласти);
			//Результат.Document = Handler.Document;
			return null;
		}
		// Получает область верхнего колонтитула
		//

		public object ПолучитьОбластьВерхнегоКолонтитула(/*знач МакетСсылка*/)
		{
			return null;
		}
		// Получает область нижнего колонтитула
		//

		public object ПолучитьОбластьНижнегоКолонтитула(/*МакетСсылка*/)
		{
			return null;
		}
		////////////////////////////////////////////////////////////////////////////////
		// Блок функций для работы с печатной формой
		// Вставляет разрыв на следующую строку
		// Параметры
		// Handler - ссылка на документ MS Word в который требуется вставить разрыв
		//

		public void ВставитьРазрывНаНовуюСтроку(/*знач Handler*/)
		{
			//oText = Handler.Document.getText();
			//oCursor = oText.createTextCursor();
			//oCursor.gotoEnd(False);
			//oText.insertControlCharacter(oCursor, 0, False);
		}
		// Добавляет верхний колонтитул к печатной форме
		//

		public void ДобавитьВерхнийКолонтитул(/*знач ПечатнаяФорма,
									знач Область*/)
		{
			//Макет_oTxtCrsr = УстановитьОсновнойКурсорНаВерхнийКолонтитул(Область);
			while(true/*Макет_oTxtCrsr.goRight(1, Истина)*/)
			{
			}
			/*;
	TransferableObject = Область.Document.getCurrentController().Frame.controller.getTransferable();*/
			//УстановитьОсновнойКурсорНаВерхнийКолонтитул(ПечатнаяФорма);
			//ПечатнаяФорма.Document.getCurrentController().insertTransferable(TransferableObject);
		}
		// Добавляет нижний колонтитул к печатной форме
		//

		public void ДобавитьНижнийКолонтитул(/*знач ПечатнаяФорма,
									знач Область*/)
		{
			//Макет_oTxtCrsr = УстановитьОсновнойКурсорНаНижнийКолонтитул(Область);
			while(true/*Макет_oTxtCrsr.goRight(1, Истина)*/)
			{
			}
			/*;
	TransferableObject = Область.Document.getCurrentController().Frame.controller.getTransferable();*/
			//УстановитьОсновнойКурсорНаНижнийКолонтитул(ПечатнаяФорма);
			//ПечатнаяФорма.Document.getCurrentController().insertTransferable(TransferableObject);
		}
		// Добавляет область в печатную форму из макета, при этом заменяя
		// параметры в области значениями из данных объекта.
		// Применяется при одиночном выводе области.
		//
		// Параметры
		// ПечатнаяФорма - ссылка на печатную форму
		// ОбластьHandler - ссылка на область в макете.
		// ПереходНаСледСтроку - булево, требуется ли вставлять разрыв после вывода области
		//
		// Возвращаемое значение:
		// КоординатыОбласти
		//

		public void ПрисоединитьОбласть(/*знач ПечатнаяФормаHandler,
							знач ОбластьHandler,
							знач ПереходНаСледСтроку = Истина,
							знач ПрисоединитьСтрокуТаблицы = Ложь*/)
		{
			//Макет_oTxtCrsr = ОбластьHandler.Document.getCurrentController().getViewCursor();
			//Макет_oTxtCrsr.gotoRange(ОбластьHandler.Start, Ложь);
			if(true/*НЕ ПрисоединитьСтрокуТаблицы*/)
			{
				//Макет_oTxtCrsr.goRight(1, Ложь);
			}
			//Макет_oTxtCrsr.gotoRange(ОбластьHandler.End, Истина);
			//TransferableObject = ОбластьHandler.Document.getCurrentController().Frame.controller.getTransferable();
			//ПечатнаяФормаHandler.Document.getCurrentController().insertTransferable(TransferableObject);
			if(true/*ПрисоединитьСтрокуТаблицы*/)
			{
				//УдалитьСтроку(ПечатнаяФормаHandler);
			}
			if(true/*ПереходНаСледСтроку*/)
			{
				//ВставитьРазрывНаНовуюСтроку(ПечатнаяФормаHandler);
			}
		}
		// Заполняет параметры в табличном поле печатной формы
		//

		public void ЗаполнитьПараметры(/*ПечатнаяФорма, Данные*/)
		{
		}
		// Добавляет область коллекции к печатной форме
		//

		public void ПрисоединитьИЗаполнитьКоллекцию(/*знач ПечатнаяФормаHandler,
										  знач ОбластьHandler,
										  знач Данные,
										  знач ЭтоСтрокаТаблицы = Ложь,
										  знач ПереходНаСледСтроку = Истина*/)
		{
			//Макет_oTxtCrsr = ОбластьHandler.Document.getCurrentController().getViewCursor();
			//Макет_oTxtCrsr.gotoRange(ОбластьHandler.Start, Ложь);
			if(true/*НЕ ЭтоСтрокаТаблицы*/)
			{
				//Макет_oTxtCrsr.goRight(1, Ложь);
			}
			//Макет_oTxtCrsr.gotoRange(ОбластьHandler.End, Истина);
			//TransferableObject = ОбластьHandler.Document.getCurrentController().Frame.controller.getTransferable();
			if(true/*ПереходНаСледСтроку*/)
			{
				//ВставитьРазрывНаНовуюСтроку(ПечатнаяФормаHandler);
			}
		}
		// Устанавливает курсор в конец документа ДокументСсылка
		//

		public void УстановитьОсновнойКурсорНаТелоДокумента(/*знач ДокументСсылка*/)
		{
			//oDoc = ДокументСсылка.Document;
			//oViewCursor = oDoc.getCurrentController().getViewCursor();
			//oTextCursor = oDoc.Text.createTextCursor();
			//oViewCursor.gotoRange(oTextCursor, Ложь);
			//oViewCursor.gotoEnd(Ложь);
		}
		// Устанавливает курсор на верхний колонтитул
		//

		public object УстановитьОсновнойКурсорНаВерхнийКолонтитул(/*знач ДокументСсылка*/)
		{
			//xCursor = ДокументСсылка.Document.getCurrentController().getViewCursor();
			//PageStyleName = xCursor.getPropertyValue("PageStyleName");
			//oPStyle = ДокументСсылка.Document.getStyleFamilies().getByName("PageStyles").getByName(PageStyleName);
			//oPStyle.HeaderIsOn = Истина;
			//HeaderTextCursor = oPStyle.getPropertyValue("HeaderText").createTextCursor();
			//xCursor.gotoRange(HeaderTextCursor, Ложь);
			return null;
		}
		// Устанавливает курсор на нижний колонтитул
		//

		public object УстановитьОсновнойКурсорНаНижнийКолонтитул(/*знач ДокументСсылка*/)
		{
			//xCursor = ДокументСсылка.Document.getCurrentController().getViewCursor();
			//PageStyleName = xCursor.getPropertyValue("PageStyleName");
			//oPStyle = ДокументСсылка.Document.getStyleFamilies().getByName("PageStyles").getByName(PageStyleName);
			//oPStyle.FooterIsOn = Истина;
			//FooterTextCursor = oPStyle.getPropertyValue("FooterText").createTextCursor();
			//xCursor.gotoRange(FooterTextCursor, Ложь);
			return null;
		}
		////////////////////////////////////////////////////////////////////////////////
		// Служебные функции
		// Получает специальную структуру, через которую объектам UNO устанавливаются
		// параметры.
		//

		public object СвойствоЗначение(/*знач ServiceManager, знач Свойство, знач Значение*/)
		{
			//PropertyValue = ServiceManager.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
			//PropertyValue.Name = Свойство;
			//PropertyValue.Value = Значение;
			return null;
		}

		public object ПолучитьПозициюНачалаОбласти(/*знач xDocument, знач ИмяОбласти*/)
		{
			//ТекстДляПоиска = "{v8 Область." + ИмяОбласти + "}";
			//xSearchDescr = xDocument.createSearchDescriptor();
			//xSearchDescr.SearchString = ТекстДляПоиска;
			//xSearchDescr.SearchCaseSensitive = Ложь;
			//xSearchDescr.SearchWords = Истина;
			//xFound = xDocument.findFirst(xSearchDescr);
			if(true/*xFound = Неопределено*/)
			{
				//ВызватьИсключение НСтр("ru = 'Не найдено начало области макета:'") + " " + ИмяОбласти;
			}
			return null;
		}

		public object ПолучитьПозициюОкончанияОбласти(/*знач xDocument, знач ИмяОбласти*/)
		{
			//ТекстДляПоиска = "{/v8 Область." + ИмяОбласти + "}";
			//xSearchDescr = xDocument.createSearchDescriptor();
			//xSearchDescr.SearchString = ТекстДляПоиска;
			//xSearchDescr.SearchCaseSensitive = Ложь;
			//xSearchDescr.SearchWords = Истина;
			//xFound = xDocument.findFirst(xSearchDescr);
			if(true/*xFound = Неопределено*/)
			{
				//ВызватьИсключение НСтр("ru = 'Не найден конец области макета:'") + " " + ИмяОбласти;
			}
			return null;
		}

		public void УдалитьСтроку(/*ПечатнаяФормаHandler*/)
		{
			//oFrame = ПечатнаяФормаHandler.Document.getCurrentController().Frame;
			//dispatcher = ПечатнаяФормаHandler.ServiceManager.CreateInstance ("com.sun.star.frame.DispatchHelper");
			//oViewCursor = ПечатнаяФормаHandler.Document.getCurrentController().getViewCursor();
			//dispatcher.executeDispatch(oFrame, ".uno:GoUp", "", 0, ПолучитьComSafeArray());
			while(true/*oViewCursor.TextTable <> Неопределено*/)
			{
				//dispatcher.executeDispatch(oFrame, ".uno:GoUp", "", 0, ПолучитьComSafeArray());
			}
			/*;
	
	dispatcher.executeDispatch(oFrame, ".uno:Delete", "", 0, ПолучитьComSafeArray());*/
			while(true/*oViewCursor.TextTable <> Неопределено*/)
			{
				//dispatcher.executeDispatch(oFrame, ".uno:GoDown", "", 0, ПолучитьComSafeArray());
			}
			//;;
		}

		public object ПолучитьComSafeArray(/**/)
		{
			//scr = Новый COMОбъект("MSScriptControl.ScriptControl");
			//scr.language = "javascript";
			//scr.eval("Массив=new Array()");
			return null;
		}

		public object СобытиеЖурналаРегистрации(/**/)
		{
			//Возврат НСтр("ru = 'Печать'");
			return null;
		}

		public void НеУдалосьСформироватьПечатнуюФорму(/*ИнформацияОбОшибке*/)
		{
			//ТекстУточнения = НСтр("ru = 'При работе через веб, требуется браузер Internet Explorer под управлением операционной системы Windows.'");
			//ТекстУточнения = "";
			/*ТекстИсключения = СтроковыеФункцииКлиентСервер.ПодставитьПараметрыВСтроку(
		НСтр("ru = 'Не удалось сформировать печатную форму: %1. 
			|Для вывода печатных форм в формате OpenOffice.org Writer требуется, чтобы на компьютере был установлен пакет OpenOffice.org. %2'"),
		КраткоеПредставлениеОшибки(ИнформацияОбОшибке), ТекстУточнения);*/
			//ВызватьИсключение ТекстИсключения;
		}
	}
}
