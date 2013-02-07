
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class ОтражениеРеализацииТоваровИУслугНДС:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента;//Не используется
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Грузополучатель;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента;//Договор контрагента
		public bool ИспользоватьДокументРасчетовКакСчетФактуру;//Использовать документ расчетов как счет-фактуру
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент;
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов;//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов;//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///Если данный флаг взведен, документ производит непосредственную запись в книгу продаж. Остальные регистры учета НДС не корректируются.
		///</summary>
		public bool ПрямаяЗаписьВКнигу;//Использовать в качестве дополнительной записи книги продаж
		public object РасчетныйДокумент;//Документ расчетов
		///<summary>
		///(Общ)
		///</summary>
		public bool СуммаВключаетНДС;//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента;//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен;//Тип цен
		public bool ФормироватьПроводки;//Формировать проводки
		///<summary>
		///(Общ) 
		///</summary>
		public DateTime ДатаВходящегоДокумента;//Дата документа сторонней организации
		///<summary>
		///(Общ) 
		///</summary>
		public string/*(30)*/ НомерВходящегоДокумента;//Номер документа сторонней организации
		public bool ФормироватьСторнирующиеЗаписиДопЛистовВручную;//Формировать сторнирующие записи доп. листов вручную
		public bool ЗаписьДополнительногоЛиста;//Запись дополнительного листа
		public DateTime КорректируемыйПериод;//Корректируемый период
	}
}