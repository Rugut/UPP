
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
	///Документ предназначен для отражения заявки на сертификацию, как для внешней, так и для внутренней сертификации
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаявкаНаСертификациюНоменклатуры:ДокументОбъект
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
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public object ДокументОприходования {get;set;}//Документ оприходования
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры НормативныйДокумент {get;set;}//Нормативный документ
		///<summary>
		///Организация, проводящая отбор проб (для внешней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Контрагенты ОрганПоСертификации {get;set;}//Орган по сертификации
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийЗаявкаНаСертификациюНоменклатуры ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Подразделение, которому направляется заявка на внутреннюю сертификацию
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Подразделения СертифицирующееПодразделение {get;set;}//Сертифицирующее подразделение
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
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
						Insert Into _Document381(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7586RRef
						,_Fld7587RRef
						,_Fld7588RRef
						,_Fld7590RRef
						,_Fld7591RRef
						,_Fld7592RRef
						,_Fld7593RRef
						,_Fld7594RRef
						,_Fld7595
						,_Fld7596RRef
						,_Fld7597RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Подразделение
						,@Организация
						,@Ответственный
						,@Номенклатура
						,@СерияНоменклатуры
						,@НормативныйДокумент
						,@ОрганПоСертификации
						,@ВидОперации
						,@Комментарий
						,@СертифицирующееПодразделение
						,@Склад)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document381
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7586RRef	= @Подразделение
						,_Fld7587RRef	= @Организация
						,_Fld7588RRef	= @Ответственный
						,_Fld7590RRef	= @Номенклатура
						,_Fld7591RRef	= @СерияНоменклатуры
						,_Fld7592RRef	= @НормативныйДокумент
						,_Fld7593RRef	= @ОрганПоСертификации
						,_Fld7594RRef	= @ВидОперации
						,_Fld7595	= @Комментарий
						,_Fld7596RRef	= @СертифицирующееПодразделение
						,_Fld7597RRef	= @Склад
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document381
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}