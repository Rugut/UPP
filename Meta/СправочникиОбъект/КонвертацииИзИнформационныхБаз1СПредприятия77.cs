
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
	///Конвертации из информационных баз 1С:Предприятия
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КонвертацииИзИнформационныхБаз1СПредприятия77:СправочникОбъект
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
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(50)*/ ИдентификаторКонфигурации {get;set;}//Идентификатор конфигурации
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ Конфигурация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(8)*/ НомерРелиза {get;set;}//Номер релиза
		[DataMember]
		[ProtoMember(11)]
		public string/*(10)*/ КонвертацияПомощник {get;set;}//Помощник выгрузки
		[DataMember]
		[ProtoMember(12)]
		public string/*(10)*/ КонвертацияОбработка {get;set;}//Обработка выгрузки
		[DataMember]
		[ProtoMember(13)]
		public string/*(10)*/ КонвертацияПравила {get;set;}//Правила выгрузки
		[DataMember]
		[ProtoMember(14)]
		public ХранилищеЗначения ХранилищеПомощник {get;set;}//Хранилище помощника
		[DataMember]
		[ProtoMember(15)]
		public ХранилищеЗначения ХранилищеОписаниеПомощника {get;set;}//Хранилище описания помощника
		[DataMember]
		[ProtoMember(16)]
		public ХранилищеЗначения ХранилищеОбработка {get;set;}//Хранилище обработки выгрузки
		[DataMember]
		[ProtoMember(17)]
		public ХранилищеЗначения ХранилищеПравила {get;set;}//Хранилище правил выгрузки
		[DataMember]
		[ProtoMember(18)]
		public string/*(256)*/ ИдентификаторЭлемента {get;set;}//Идентификатор элемента
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
						Insert Into _Reference23100(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld23504
						,_Fld23505
						,_Fld23506
						,_Fld23507
						,_Fld23508
						,_Fld23509
						,_Fld23510
						,_Fld23511
						,_Fld23512
						,_Fld23513
						,_Fld23514)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@ИдентификаторКонфигурации
						,@Конфигурация
						,@НомерРелиза
						,@КонвертацияПомощник
						,@КонвертацияОбработка
						,@КонвертацияПравила
						,@ХранилищеПомощник
						,@ХранилищеОписаниеПомощника
						,@ХранилищеОбработка
						,@ХранилищеПравила
						,@ИдентификаторЭлемента)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference23100
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld23504	= @ИдентификаторКонфигурации
						,_Fld23505	= @Конфигурация
						,_Fld23506	= @НомерРелиза
						,_Fld23507	= @КонвертацияПомощник
						,_Fld23508	= @КонвертацияОбработка
						,_Fld23509	= @КонвертацияПравила
						,_Fld23510	= @ХранилищеПомощник
						,_Fld23511	= @ХранилищеОписаниеПомощника
						,_Fld23512	= @ХранилищеОбработка
						,_Fld23513	= @ХранилищеПравила
						,_Fld23514	= @ИдентификаторЭлемента
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ИдентификаторКонфигурации", ИдентификаторКонфигурации);
					Команда.Parameters.AddWithValue("Конфигурация", Конфигурация);
					Команда.Parameters.AddWithValue("НомерРелиза", НомерРелиза);
					Команда.Parameters.AddWithValue("КонвертацияПомощник", КонвертацияПомощник);
					Команда.Parameters.AddWithValue("КонвертацияОбработка", КонвертацияОбработка);
					Команда.Parameters.AddWithValue("КонвертацияПравила", КонвертацияПравила);
					Команда.Parameters.AddWithValue("ХранилищеПомощник",new byte[0]);
					Команда.Parameters.AddWithValue("ХранилищеОписаниеПомощника",new byte[0]);
					Команда.Parameters.AddWithValue("ХранилищеОбработка",new byte[0]);
					Команда.Parameters.AddWithValue("ХранилищеПравила",new byte[0]);
					Команда.Parameters.AddWithValue("ИдентификаторЭлемента", ИдентификаторЭлемента);
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
					Команда.CommandText = @"Delete _Reference23100
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}