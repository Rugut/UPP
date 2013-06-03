
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
	[ProtoContract]
	[DataContract]
	public partial class УдалитьКорректировочныйСчетФактураПолученный:ДокументОбъект
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
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(12)]
		public V82.ДокументыСсылка.СчетФактураПолученный СчетФактура {get;set;}//Счет-фактура
		[DataMember]
		[ProtoMember(13)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер входящего документа
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата входящего документа
		[DataMember]
		[ProtoMember(15)]
		public string/*(250)*/ НаименованиеПродавца {get;set;}//Наименование продавца
		[DataMember]
		[ProtoMember(16)]
		public string/*(12)*/ ИННПродавца {get;set;}//ИНН продавца
		[DataMember]
		[ProtoMember(17)]
		public string/*(9)*/ КПППродавца {get;set;}//КПП продавца
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ РазницаСНДСКУменьшению {get;set;}//Разница с НДС к уменьшению
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(15.2)*/ РазницаСНДСКДоплате {get;set;}//Разница с НДС к доплате
		[DataMember]
		[ProtoMember(23)]
		public decimal/*(15.2)*/ РазницаНДСКУменьшению {get;set;}//Разница НДС к уменьшению
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(15.2)*/ РазницаНДСКДоплате {get;set;}//Разница НДС к доплате
		[DataMember]
		[ProtoMember(25)]
		public bool РучнаяКорректировка {get;set;}//Ручная корректировка
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
						Insert Into _Document614(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld18421RRef
						,_Fld18422RRef
						,_Fld18423RRef
						,_Fld18424RRef
						,_Fld18425
						,_Fld18426
						,_Fld18427
						,_Fld18428
						,_Fld18429
						,_Fld18430RRef
						,_Fld18431RRef
						,_Fld18432
						,_Fld18433
						,_Fld18434
						,_Fld18435
						,_Fld18436
						,_Fld18437)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Контрагент
						,@ДоговорКонтрагента
						,@СчетФактура
						,@НомерВходящегоДокумента
						,@ДатаВходящегоДокумента
						,@НаименованиеПродавца
						,@ИННПродавца
						,@КПППродавца
						,@ВалютаДокумента
						,@Ответственный
						,@Комментарий
						,@РазницаСНДСКУменьшению
						,@РазницаСНДСКДоплате
						,@РазницаНДСКУменьшению
						,@РазницаНДСКДоплате
						,@РучнаяКорректировка)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document614
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld18421RRef	= @Организация
						,_Fld18422RRef	= @Контрагент
						,_Fld18423RRef	= @ДоговорКонтрагента
						,_Fld18424RRef	= @СчетФактура
						,_Fld18425	= @НомерВходящегоДокумента
						,_Fld18426	= @ДатаВходящегоДокумента
						,_Fld18427	= @НаименованиеПродавца
						,_Fld18428	= @ИННПродавца
						,_Fld18429	= @КПППродавца
						,_Fld18430RRef	= @ВалютаДокумента
						,_Fld18431RRef	= @Ответственный
						,_Fld18432	= @Комментарий
						,_Fld18433	= @РазницаСНДСКУменьшению
						,_Fld18434	= @РазницаСНДСКДоплате
						,_Fld18435	= @РазницаНДСКУменьшению
						,_Fld18436	= @РазницаНДСКДоплате
						,_Fld18437	= @РучнаяКорректировка
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("СчетФактура", СчетФактура.Ссылка);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("НаименованиеПродавца", НаименованиеПродавца);
					Команда.Parameters.AddWithValue("ИННПродавца", ИННПродавца);
					Команда.Parameters.AddWithValue("КПППродавца", КПППродавца);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("РазницаСНДСКУменьшению", РазницаСНДСКУменьшению);
					Команда.Parameters.AddWithValue("РазницаСНДСКДоплате", РазницаСНДСКДоплате);
					Команда.Parameters.AddWithValue("РазницаНДСКУменьшению", РазницаНДСКУменьшению);
					Команда.Parameters.AddWithValue("РазницаНДСКДоплате", РазницаНДСКДоплате);
					Команда.Parameters.AddWithValue("РучнаяКорректировка", РучнаяКорректировка);
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
					Команда.CommandText = @"Delete _Document614
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}