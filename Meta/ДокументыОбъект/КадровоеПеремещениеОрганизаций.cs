
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КадровоеПеремещениеОрганизаций:ДокументОбъект
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
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public bool ИндексацияЗаработка {get;set;}//Индексация заработка
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(6.3)*/ КоэффициентИндексацииЗаработка {get;set;}//Коэффициент индексации заработка
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(5.2)*/ УдалитьРайонныйКоэффициент {get;set;}//Удалить районный коэффициент
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Организации ОбособленноеПодразделениеОткуда {get;set;}//Обособленное подразделение откуда
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Организации ОбособленноеПодразделениеКуда {get;set;}//Обособленное подразделение куда
		[DataMember]
		[ProtoMember(17)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(18)]
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		[DataMember]
		[ProtoMember(19)]
		public V82.ДокументыСсылка.КадровоеПеремещениеОрганизаций ИсправляемыйДокумент {get;set;}//Исправляемый документ
		[DataMember]
		[ProtoMember(20)]
		public ХранилищеЗначения ДвиженияИсправляемогоДокумента {get;set;}//Движения исправляемого документа
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
						Insert Into _Document412(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8558RRef
						,_Fld8559
						,_Fld8560RRef
						,_Fld8561
						,_Fld8562
						,_Fld8563
						,_Fld8564RRef
						,_Fld8565RRef
						,_Fld8566
						,_Fld8567
						,_Fld8568RRef
						,_Fld8569)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Комментарий
						,@Ответственный
						,@ИндексацияЗаработка
						,@КоэффициентИндексацииЗаработка
						,@УдалитьРайонныйКоэффициент
						,@ОбособленноеПодразделениеОткуда
						,@ОбособленноеПодразделениеКуда
						,@КраткийСоставДокумента
						,@ДанныеПрошлойВерсии
						,@ИсправляемыйДокумент
						,@ДвиженияИсправляемогоДокумента)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document412
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8558RRef	= @Организация
						,_Fld8559	= @Комментарий
						,_Fld8560RRef	= @Ответственный
						,_Fld8561	= @ИндексацияЗаработка
						,_Fld8562	= @КоэффициентИндексацииЗаработка
						,_Fld8563	= @УдалитьРайонныйКоэффициент
						,_Fld8564RRef	= @ОбособленноеПодразделениеОткуда
						,_Fld8565RRef	= @ОбособленноеПодразделениеКуда
						,_Fld8566	= @КраткийСоставДокумента
						,_Fld8567	= @ДанныеПрошлойВерсии
						,_Fld8568RRef	= @ИсправляемыйДокумент
						,_Fld8569	= @ДвиженияИсправляемогоДокумента
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ИндексацияЗаработка", ИндексацияЗаработка);
					Команда.Parameters.AddWithValue("КоэффициентИндексацииЗаработка", КоэффициентИндексацииЗаработка);
					Команда.Parameters.AddWithValue("УдалитьРайонныйКоэффициент", УдалитьРайонныйКоэффициент);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ДанныеПрошлойВерсии", ДанныеПрошлойВерсии);
					Команда.Parameters.AddWithValue("ИсправляемыйДокумент", ИсправляемыйДокумент.Ссылка);
					Команда.Parameters.AddWithValue("ДвиженияИсправляемогоДокумента",new byte[0]);
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
					Команда.CommandText = @"Delete _Document412
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}