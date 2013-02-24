
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///Вложения электронных писем
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВложенияЭлектронныхПисем:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Объект
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public V82.ДокументыСсылка.ЭлектронноеПисьмо Объект {get;set;}
		///<summary>
		///Имя файла
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Хранилище
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public ХранилищеЗначения Хранилище {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(200)*/ ИДФайлаПочтовогоПисьма {get;set;}//ИДФайла почтового письма
		[DataMember]
		[ProtoMember(11)]
		public object Предмет {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public ХранилищеЗначения ТекстФайла {get;set;}//Текст файла
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference67(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld1986RRef
						,_Fld1987
						,_Fld1988
						,_Fld1989
						,_Fld1991)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@Объект
						,@ИмяФайла
						,@Хранилище
						,@ИДФайлаПочтовогоПисьма
						,@ТекстФайла)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference67
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld1986RRef	= @Объект
						,_Fld1987	= @ИмяФайла
						,_Fld1988	= @Хранилище
						,_Fld1989	= @ИДФайлаПочтовогоПисьма
						,_Fld1991	= @ТекстФайла
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Объект", Объект.Ссылка);
					Команда.Parameters.AddWithValue("ИмяФайла", ИмяФайла);
					Команда.Parameters.AddWithValue("Хранилище",new byte[0]);
					Команда.Parameters.AddWithValue("ИДФайлаПочтовогоПисьма", ИДФайлаПочтовогоПисьма);
					Команда.Parameters.AddWithValue("ТекстФайла",new byte[0]);
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
					Команда.CommandText = @"Delete _Reference67
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			if(true/*ТипЗнч(Объект) = Тип("ДокументСсылка.ЭлектронноеПисьмо")
	   И ТипЗнч(Объект.ПредметКонтакта) = Тип("СправочникСсылка.ФизическиеЛица")*/)
			{
				//Предмет = Объект.ПредметКонтакта;
			}
		}
	}
}