
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НематериальныеАктивы:СправочникОбъект
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
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ НаименованиеПолное {get;set;}//Полное наименование
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыНМА ВидНМА {get;set;}//Вид НМА
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.АмортизационныеГруппы АмортизационнаяГруппа {get;set;}//Амортизационная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ ПрочиеСведения {get;set;}//Прочие сведения
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовУчетаНМА ВидОбъектаУчета {get;set;}//Вид объекта учета
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
						Insert Into _Reference161(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2898
						,_Fld2899RRef
						,_Fld2900RRef
						,_Fld2901
						,_Fld2902RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@НаименованиеПолное
						,@ВидНМА
						,@АмортизационнаяГруппа
						,@ПрочиеСведения
						,@ВидОбъектаУчета)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference161
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2898	= @НаименованиеПолное
						,_Fld2899RRef	= @ВидНМА
						,_Fld2900RRef	= @АмортизационнаяГруппа
						,_Fld2901	= @ПрочиеСведения
						,_Fld2902RRef	= @ВидОбъектаУчета
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("НаименованиеПолное", НаименованиеПолное);
					Команда.Parameters.AddWithValue("ВидНМА", ВидНМА.Ключ());
					Команда.Parameters.AddWithValue("АмортизационнаяГруппа", АмортизационнаяГруппа.Ключ());
					Команда.Parameters.AddWithValue("ПрочиеСведения", ПрочиеСведения);
					Команда.Parameters.AddWithValue("ВидОбъектаУчета", ВидОбъектаУчета.Ключ());
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
					Команда.CommandText = @"Delete _Reference161
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}