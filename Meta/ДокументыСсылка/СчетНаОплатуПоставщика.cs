
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class СчетНаОплатуПоставщика:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public V82.СправочникиСсылка.Валюты ВалютаДокумента;//Валюта документа
		public DateTime ВремяНапоминания;//Время напоминания
		///<summary>
		///(Общ) 
		///</summary>
		public DateTime ДатаВходящегоДокумента;//Дата документа сторонней организации
		public DateTime ДатаОплаты;//Дата оплаты
		public DateTime ДатаПоступления;//Дата поступления
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента;//Договор контрагента
		public bool ИспользоватьПлановуюСебестоимость;//Использовать плановую себестоимость
		public decimal/*(15.2)*/ ИтогПлановаяСебестоимость;//Итоговая плановая себестоимость в валюте управленческого учета
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public V82.СправочникиСсылка.Контрагенты Контрагент;
		public decimal/*(10)*/ КратностьВзаиморасчетов;//Кратность взаиморасчетов
		///<summary>
		///Курс валюты взаиморасчетов по договору
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов;//Курс взаиморасчетов
		public bool НапомнитьОСобытии;//Напомнить о событии
		///<summary>
		///(Общ) 
		///</summary>
		public string/*(30)*/ НомерВходящегоДокумента;//Номер документа сторонней организации
		public V82.СправочникиСсылка.Организации Организация;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public V82.СправочникиСсылка.Подразделения Подразделение;
		public V82.СправочникиСсылка.Склады Склад;
		public object СтруктурнаяЕдиница;//Б/счет, касса
		public bool СуммаВключаетНДС;//Сумма включает НДС
		///<summary>
		///Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента;//Сумма документа
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен;//Тип цен
		public bool УчитыватьНДС;//Учитывать НДС
		public object ДокументОснование;//Документ основание
		public V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов КонтактноеЛицоКонтрагента;//Контактное лицо контрагента
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж;//Условие продаж
		public string/*(20)*/ НомерВходящегоДокументаЭлектронногоОбмена;//Номер входящего документа электронного обмена
		public DateTime ДатаВходящегоДокументаЭлектронногоОбмена;//Дата входящего документа электронного обмена
	}
}