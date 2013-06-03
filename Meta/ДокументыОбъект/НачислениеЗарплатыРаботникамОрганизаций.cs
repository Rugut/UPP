
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
	public partial class НачислениеЗарплатыРаботникамОрганизаций:ДокументОбъект
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
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(15)]
		public object ПерерассчитываемыйДокумент {get;set;}//Перерассчитываемый документ
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийНачислениеЗарплатыРаботникамОрганизаций ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ПериодНачисленияЗарплаты ПериодНачисления {get;set;}//Период начисления
		[DataMember]
		[ProtoMember(18)]
		public DateTime ПериодНачисленияДатаНачала {get;set;}//Период начисления дата начала
		[DataMember]
		[ProtoMember(19)]
		public DateTime ПериодНачисленияДатаОкончания {get;set;}//Период начисления дата окончания
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
						Insert Into _Document437(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld9744
						,_Fld9745RRef
						,_Fld9746RRef
						,_Fld9747
						,_Fld9748RRef
						,_Fld9749
						,_Fld9751RRef
						,_Fld9752RRef
						,_Fld9753
						,_Fld9754)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ПериодРегистрации
						,@Организация
						,@ПодразделениеОрганизации
						,@Комментарий
						,@Ответственный
						,@КраткийСоставДокумента
						,@ВидОперации
						,@ПериодНачисления
						,@ПериодНачисленияДатаНачала
						,@ПериодНачисленияДатаОкончания)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document437
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld9744	= @ПериодРегистрации
						,_Fld9745RRef	= @Организация
						,_Fld9746RRef	= @ПодразделениеОрганизации
						,_Fld9747	= @Комментарий
						,_Fld9748RRef	= @Ответственный
						,_Fld9749	= @КраткийСоставДокумента
						,_Fld9751RRef	= @ВидОперации
						,_Fld9752RRef	= @ПериодНачисления
						,_Fld9753	= @ПериодНачисленияДатаНачала
						,_Fld9754	= @ПериодНачисленияДатаОкончания
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ПериодРегистрации", ПериодРегистрации);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ПериодНачисления", ПериодНачисления.Ключ());
					Команда.Parameters.AddWithValue("ПериодНачисленияДатаНачала", ПериодНачисленияДатаНачала);
					Команда.Parameters.AddWithValue("ПериодНачисленияДатаОкончания", ПериодНачисленияДатаОкончания);
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
					Команда.CommandText = @"Delete _Document437
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}