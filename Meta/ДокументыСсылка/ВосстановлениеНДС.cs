
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///Восстановление сумм НДС ранее принятых к вычету, право на применение вычета по которым впоследствии исчезло
	///</summary>
	public partial class ВосстановлениеНДС:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public V82.СправочникиСсылка.Организации Организация;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public DateTime НачалоПериода;//Начало периода
		public DateTime КонецПериода;//Конец периода
		public bool ОтразитьВКнигеПродаж;//Отразить в книге продаж
	}
}
