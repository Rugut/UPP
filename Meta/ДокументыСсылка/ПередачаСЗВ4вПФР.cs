
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class ПередачаСЗВ4вПФР:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public V82.СправочникиСсылка.Организации Организация;
		public DateTime ДатаДействия;//Дата действия
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public string/*(100)*/ КраткийСоставДокумента;//Краткий состав документа
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель;
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя;//Должность руководителя
		public DateTime ОтчетныйПериод;//Отчетный период
		public bool ПринятоВПФР;//Принято ВПФР
		public string/*(5)*/ НомерПачки;//Номер пачки
		public V82.Перечисления/*Ссылка*/.ФорматФайлаПФР ФорматФайла;//Формат файла
		public string/*(5)*/ ТипСведений;//Тип сведений
		public decimal/*(4)*/ Год;
		///<summary>
		///Ведет себя по правилам 2009 года.
		///</summary>
		public bool СпециальныйДокумент2010года;//Специальный документ 2010 года
		public bool НеСодержитСЗВ;//Не содержит СЗВ
		public V82.ДокументыСсылка.РегламентированныйОтчет РасчетСтраховыхВзносов;//Ссылка на расчет страховых взносов
		///<summary>
		///Такие документы создает обработка загрузки из принятых ПФРом файлов
		///</summary>
		public bool ЗаполненПринятымиСведениями;//Заполнен принятыми сведениями
		public decimal/*(15.2)*/ УдалитьУплаченоЗаТекущийГодСтраховаяЧасть;//Удалить уплачено за текущий год страховая часть
		public decimal/*(15.2)*/ УдалитьНачисленоЗаТекущийГодДополнительныйТариф;//Удалить начислено за текущий год дополнительный тариф
		public decimal/*(15.2)*/ УдалитьУплаченоЗаТекущийГодДополнительныйТариф;//Удалить уплачено за текущий год дополнительный тариф
		public decimal/*(15.2)*/ УдалитьУплаченоЗаТекущийГодНакопительнаяЧасть;//Удалить уплачено за текущий год накопительная часть
		public decimal/*(15.2)*/ УдалитьНачисленоЗаТекущийГодСтраховаяЧасть;//Удалить начислено за текущий год страховая часть
		public decimal/*(15.2)*/ УдалитьНачисленоЗаТекущийГодНакопительнаяЧасть;//Удалить начислено за текущий год накопительная часть
	}
}