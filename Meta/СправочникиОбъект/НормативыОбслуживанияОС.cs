
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НормативыОбслуживанияОС:СправочникОбъект
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаУтверждения {get;set;}//Дата утверждения
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Номенклатура Услуга {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодичностьОбслуживания {get;set;}//Периодичность обслуживания
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(10.2)*/ КоличествоПериодов {get;set;}//Количество периодов
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ПараметрыВыработкиОС ПараметрВыработки {get;set;}//Параметр выработки
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(15.3)*/ ЗначениеПараметраВыработки {get;set;}//Значение параметра выработки
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(15.3)*/ Количество {get;set;}
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
						Insert Into _Reference167(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2975
						,_Fld2976RRef
						,_Fld2977
						,_Fld2978RRef
						,_Fld2979RRef
						,_Fld2980
						,_Fld2981RRef
						,_Fld2982
						,_Fld2983)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@Комментарий
						,@Состояние
						,@ДатаУтверждения
						,@Услуга
						,@ПериодичностьОбслуживания
						,@КоличествоПериодов
						,@ПараметрВыработки
						,@ЗначениеПараметраВыработки
						,@Количество)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference167
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2975	= @Комментарий
						,_Fld2976RRef	= @Состояние
						,_Fld2977	= @ДатаУтверждения
						,_Fld2978RRef	= @Услуга
						,_Fld2979RRef	= @ПериодичностьОбслуживания
						,_Fld2980	= @КоличествоПериодов
						,_Fld2981RRef	= @ПараметрВыработки
						,_Fld2982	= @ЗначениеПараметраВыработки
						,_Fld2983	= @Количество
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
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("ДатаУтверждения", ДатаУтверждения);
					Команда.Parameters.AddWithValue("Услуга", Услуга.Ссылка);
					Команда.Parameters.AddWithValue("ПериодичностьОбслуживания", ПериодичностьОбслуживания.Ключ());
					Команда.Parameters.AddWithValue("КоличествоПериодов", КоличествоПериодов);
					Команда.Parameters.AddWithValue("ПараметрВыработки", ПараметрВыработки.Ссылка);
					Команда.Parameters.AddWithValue("ЗначениеПараметраВыработки", ЗначениеПараметраВыработки);
					Команда.Parameters.AddWithValue("Количество", Количество);
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
					Команда.CommandText = @"Delete _Reference167
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*НЕ ОбменДанными.Загрузка*/)
			{
				//СтрокаОшибки = "Элемент справочника ""Нормативы обслуживания ОС"" не записан.";
				if(true/*ЗначениеЗаполнено(ПериодичностьОбслуживания) И КоличествоПериодов = 0*/)
				{
					//ОбщегоНазначения.СообщитьОбОшибке("Количество периодов обслуживание должно быть больше нуля.",, СтрокаОшибки);
					//Отказ = Истина;
				}
				if(true/*ЗначениеЗаполнено(ПараметрВыработки) И ЗначениеПараметраВыработки = 0*/)
				{
					//ОбщегоНазначения.СообщитьОбОшибке("Количество параметра выработки должно быть больше нуля.",, СтрокаОшибки);
					//Отказ = Истина;
				}
				if(true/*НЕ ЗначениеЗаполнено(ПериодичностьОбслуживания) И  НЕ ЗначениеЗаполнено(ПараметрВыработки)*/)
				{
					//ОбщегоНазначения.СообщитьОбОшибке("Должен быть заполнен параметр выработки или периодичность обслуживания",, СтрокаОшибки);
					//Отказ = Истина;
				}
			}
		}
	}
}