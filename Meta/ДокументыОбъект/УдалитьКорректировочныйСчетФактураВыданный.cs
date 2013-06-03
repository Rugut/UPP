
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
	public partial class УдалитьКорректировочныйСчетФактураВыданный:ДокументОбъект
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
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор
		[DataMember]
		[ProtoMember(12)]
		public V82.ДокументыСсылка.СчетФактураВыданный СчетФактура {get;set;}//Счет-фактура
		[DataMember]
		[ProtoMember(13)]
		public string/*(250)*/ НаименованиеПродавца {get;set;}//Наименование продавца
		[DataMember]
		[ProtoMember(14)]
		public string/*(250)*/ АдресПродавца {get;set;}//Адрес продавца
		[DataMember]
		[ProtoMember(15)]
		public string/*(12)*/ ИННПродавца {get;set;}//ИНН продавца
		[DataMember]
		[ProtoMember(16)]
		public string/*(9)*/ КПППродавца {get;set;}//КПП продавца
		[DataMember]
		[ProtoMember(17)]
		public string/*(250)*/ НаименованиеПокупателя {get;set;}//Наименование покупателя
		[DataMember]
		[ProtoMember(18)]
		public string/*(250)*/ АдресПокупателя {get;set;}//Адрес покупателя
		[DataMember]
		[ProtoMember(19)]
		public string/*(12)*/ ИННПокупателя {get;set;}//ИНН покупателя
		[DataMember]
		[ProtoMember(20)]
		public string/*(9)*/ КПППокупателя {get;set;}//КПП покупателя
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта
		[DataMember]
		[ProtoMember(22)]
		public string/*(100)*/ ФИОРуководителя {get;set;}//Руководитель
		[DataMember]
		[ProtoMember(23)]
		public string/*(100)*/ ФИОГлавногоБухгалтера {get;set;}//Главный бухгалтер
		[DataMember]
		[ProtoMember(24)]
		public string/*(100)*/ СвидетельствоИП {get;set;}//Свидетельство ИП
		[DataMember]
		[ProtoMember(25)]
		public bool НДСПредъявленКВычету {get;set;}//Отразить вычет НДС
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ РазницаСНДСКУменьшению {get;set;}//Разница с НДС к уменьшению
		[DataMember]
		[ProtoMember(29)]
		public decimal/*(15.2)*/ РазницаСНДСКДоплате {get;set;}//Разница с НДС к доплате
		[DataMember]
		[ProtoMember(30)]
		public decimal/*(15.2)*/ РазницаНДСКУменьшению {get;set;}//Разница НДС к уменьшению
		[DataMember]
		[ProtoMember(31)]
		public decimal/*(15.2)*/ РазницаНДСКДоплате {get;set;}//Разница НДС к доплате
		[DataMember]
		[ProtoMember(32)]
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
						Insert Into _Document613(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld18372RRef
						,_Fld18373RRef
						,_Fld18374RRef
						,_Fld18375RRef
						,_Fld18376
						,_Fld18377
						,_Fld18378
						,_Fld18379
						,_Fld18380
						,_Fld18381
						,_Fld18382
						,_Fld18383
						,_Fld18384RRef
						,_Fld18385
						,_Fld18386
						,_Fld18387
						,_Fld18388
						,_Fld18389RRef
						,_Fld18390
						,_Fld18391
						,_Fld18392
						,_Fld18393
						,_Fld18394
						,_Fld18395)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Контрагент
						,@ДоговорКонтрагента
						,@СчетФактура
						,@НаименованиеПродавца
						,@АдресПродавца
						,@ИННПродавца
						,@КПППродавца
						,@НаименованиеПокупателя
						,@АдресПокупателя
						,@ИННПокупателя
						,@КПППокупателя
						,@ВалютаДокумента
						,@ФИОРуководителя
						,@ФИОГлавногоБухгалтера
						,@СвидетельствоИП
						,@НДСПредъявленКВычету
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
						Update _Document613
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld18372RRef	= @Организация
						,_Fld18373RRef	= @Контрагент
						,_Fld18374RRef	= @ДоговорКонтрагента
						,_Fld18375RRef	= @СчетФактура
						,_Fld18376	= @НаименованиеПродавца
						,_Fld18377	= @АдресПродавца
						,_Fld18378	= @ИННПродавца
						,_Fld18379	= @КПППродавца
						,_Fld18380	= @НаименованиеПокупателя
						,_Fld18381	= @АдресПокупателя
						,_Fld18382	= @ИННПокупателя
						,_Fld18383	= @КПППокупателя
						,_Fld18384RRef	= @ВалютаДокумента
						,_Fld18385	= @ФИОРуководителя
						,_Fld18386	= @ФИОГлавногоБухгалтера
						,_Fld18387	= @СвидетельствоИП
						,_Fld18388	= @НДСПредъявленКВычету
						,_Fld18389RRef	= @Ответственный
						,_Fld18390	= @Комментарий
						,_Fld18391	= @РазницаСНДСКУменьшению
						,_Fld18392	= @РазницаСНДСКДоплате
						,_Fld18393	= @РазницаНДСКУменьшению
						,_Fld18394	= @РазницаНДСКДоплате
						,_Fld18395	= @РучнаяКорректировка
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("СчетФактура", СчетФактура.Ссылка);
					Команда.Parameters.AddWithValue("НаименованиеПродавца", НаименованиеПродавца);
					Команда.Parameters.AddWithValue("АдресПродавца", АдресПродавца);
					Команда.Parameters.AddWithValue("ИННПродавца", ИННПродавца);
					Команда.Parameters.AddWithValue("КПППродавца", КПППродавца);
					Команда.Parameters.AddWithValue("НаименованиеПокупателя", НаименованиеПокупателя);
					Команда.Parameters.AddWithValue("АдресПокупателя", АдресПокупателя);
					Команда.Parameters.AddWithValue("ИННПокупателя", ИННПокупателя);
					Команда.Parameters.AddWithValue("КПППокупателя", КПППокупателя);
					Команда.Parameters.AddWithValue("ФИОРуководителя", ФИОРуководителя);
					Команда.Parameters.AddWithValue("ФИОГлавногоБухгалтера", ФИОГлавногоБухгалтера);
					Команда.Parameters.AddWithValue("СвидетельствоИП", СвидетельствоИП);
					Команда.Parameters.AddWithValue("НДСПредъявленКВычету", НДСПредъявленКВычету);
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
					Команда.CommandText = @"Delete _Document613
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}