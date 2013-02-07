
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class ИнкассовоеПоручениеПереданное:ДокументСсылка
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
		public object ДокументОснование;//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///(Общ) Банковский счет организации
		///</summary>
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации;//Счет организации
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент;//Плательщик
		///<summary>
		///(Общ) Банковский счет контрагента
		///</summary>
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента;//Счет контрагента
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента;//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента;//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента;//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПоступлениеБезналичныхДенежныхСредств ВидОперации;//Вид операции
		///<summary>
		///(Общ) электронно, почтой, телеграфом
		///</summary>
		public string/*(15)*/ ВидПлатежа;//Вид платежа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(1)*/ ОчередностьПлатежа;//Очередность платежа
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ НазначениеПлатежа;//Назначение платежа
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтраженоВОперУчете;//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ ТекстПлательщика;//Текст плательщика
		///<summary>
		///(Общ)
		///</summary>
		public string/*(0)*/ ТекстПолучателя;//Текст получателя
		///<summary>
		///(Регл)
		///</summary>
		public string/*(12)*/ ИННПлательщика;//ИНН плательщика
		///<summary>
		///(Регл)
		///</summary>
		public string/*(9)*/ КПППлательщика;//КПП плательщика
		///<summary>
		///(Регл)
		///</summary>
		public string/*(12)*/ ИННПолучателя;//ИНН получателя
		///<summary>
		///(Регл)
		///</summary>
		public string/*(9)*/ КПППолучателя;//КПП получателя
		///<summary>
		///(Общ)
		///</summary>
		public bool Оплачено;
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаОплаты;//Дата оплаты
		///<summary>
		///(общ)
		///</summary>
		public bool ЧастичнаяОплата;//По документу происходит оплата частями
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовСКонтрагентом;//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете;//Отражать в бухгалтерском учете
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств;//Статья движения денежных средств
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКт1;//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКт2;//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоКт3;//Субконто Кт1
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		public string/*(200)*/ Содержание_УСН;//Содержание УСН
		public decimal/*(15.2)*/ Графа4_УСН;//Графа4 УСН
		public decimal/*(15.2)*/ Графа5_УСН;//Графа5 УСН
		public decimal/*(15.2)*/ Графа6_УСН;//Графа5
		public decimal/*(15.2)*/ Графа7_УСН;//Графа5
		public bool ДоходыЕНВД_УСН;//ДоходыЕНВД
		public bool РасходыЕНВД_УСН;//Расходы ЕНВД УСН
		public decimal/*(15.2)*/ НДС_УСН;//НДС УСН
		public bool РучнаяНастройка_УСН;//Ручная настройка УСН
		public V82.СправочникиСсылка.Подразделения Подразделение;
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовСКонтрагентомНУ;//Счет учета расчетов с контрагентом НУ
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУКт1;//Субконто НУ Кт1
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУКт2;//Субконто НУ Кт2
		///<summary>
		///(Регл)
		///</summary>
		public object СубконтоНУКт3;//Субконто НУ Кт3
	}
}