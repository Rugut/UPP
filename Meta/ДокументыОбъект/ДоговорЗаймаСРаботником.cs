
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ДоговорЗаймаСРаботником:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		///<summary>
		///(Общ) Сумма в валюте документа
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(15.2)*/ СуммаЗайма {get;set;}//Сумма займа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(7.2)*/ ПроцентЗаПользованиеЗаймом {get;set;}//Процент за пользование займом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.ПорядокПогашенияЗаймаПроцентов ПорядокПогашенияЗайма {get;set;}//Порядок погашения займа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(3)*/ СрокПогашения {get;set;}//Срок погашения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public DateTime НачалоПогашения {get;set;}//Начало погашения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool НачислятьМатериальнуюВыгоду {get;set;}//Начислять материальную выгоду
		[DataMember]
		[ProtoMember(22)]
		public V82.Перечисления/*Ссылка*/.НДФЛСтавкиНалогообложенияРезидента СтавкаНалогообложенияРезидента {get;set;}//Ставка налогообложения резидента
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СчетУчетаПроцентовПоЗайму {get;set;}//Счет учета процентов по займу
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object Субконто1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object Субконто2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object Субконто3 {get;set;}//Субконто 3
		[DataMember]
		[ProtoMember(29)]
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document251(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4174RRef
						,_Fld4175
						,_Fld4176RRef
						,_Fld4177
						,_Fld4178
						,_Fld4179
						,_Fld4180RRef
						,_Fld4181
						,_Fld4182
						,_Fld4183
						,_Fld4184
						,_Fld4185RRef
						,_Fld4186
						,_Fld4193RRef
						,_Fld4187RRef
						,_Fld4188
						,_Fld4189RRef
						,_Fld4190RRef
						,_Fld4191RRef
						,_Fld4192RRef
						,_Fld26723)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ФизЛицо
						,@СуммаЗайма
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@ПроцентЗаПользованиеЗаймом
						,@ПорядокПогашенияЗайма
						,@СрокПогашения
						,@НачалоПогашения
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@Организация
						,@НачислятьМатериальнуюВыгоду
						,@СтавкаНалогообложенияРезидента
						,@СчетУчетаПроцентовПоЗайму
						,@Комментарий
						,@Ответственный
						,@Субконто1
						,@Субконто2
						,@Субконто3
						,@ДанныеПрошлойВерсии)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document251
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4174RRef	= @ФизЛицо
						,_Fld4175	= @СуммаЗайма
						,_Fld4176RRef	= @ВалютаДокумента
						,_Fld4177	= @КурсДокумента
						,_Fld4178	= @КратностьДокумента
						,_Fld4179	= @ПроцентЗаПользованиеЗаймом
						,_Fld4180RRef	= @ПорядокПогашенияЗайма
						,_Fld4181	= @СрокПогашения
						,_Fld4182	= @НачалоПогашения
						,_Fld4183	= @ОтражатьВУправленческомУчете
						,_Fld4184	= @ОтражатьВБухгалтерскомУчете
						,_Fld4185RRef	= @Организация
						,_Fld4186	= @НачислятьМатериальнуюВыгоду
						,_Fld4193RRef	= @СтавкаНалогообложенияРезидента
						,_Fld4187RRef	= @СчетУчетаПроцентовПоЗайму
						,_Fld4188	= @Комментарий
						,_Fld4189RRef	= @Ответственный
						,_Fld4190RRef	= @Субконто1
						,_Fld4191RRef	= @Субконто2
						,_Fld4192RRef	= @Субконто3
						,_Fld26723	= @ДанныеПрошлойВерсии
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("СуммаЗайма", СуммаЗайма);
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("ПроцентЗаПользованиеЗаймом", ПроцентЗаПользованиеЗаймом);
					Команда.Parameters.AddWithValue("ПорядокПогашенияЗайма", ПорядокПогашенияЗайма.Ключ());
					Команда.Parameters.AddWithValue("СрокПогашения", СрокПогашения);
					Команда.Parameters.AddWithValue("НачалоПогашения", НачалоПогашения);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("НачислятьМатериальнуюВыгоду", НачислятьМатериальнуюВыгоду);
					Команда.Parameters.AddWithValue("СтавкаНалогообложенияРезидента", СтавкаНалогообложенияРезидента.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаПроцентовПоЗайму", Guid.Empty);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Субконто1", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто2", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто3", Guid.Empty);
					Команда.Parameters.AddWithValue("ДанныеПрошлойВерсии", ДанныеПрошлойВерсии);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document251
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}