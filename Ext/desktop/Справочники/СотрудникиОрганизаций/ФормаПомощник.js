Ext.require(['Данные.Справочники.СотрудникиОрганизаций'], function () 
{
	Ext.define('Справочники.СотрудникиОрганизаций.ФормаПомощник',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Помощник приема на работу',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:182px;top:0px;width:418px;height:425px;',
			height: 425,width: 418,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 280,
			height: 19,
			style: 'position:absolute;left:105px;top:44px;width:280px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:20px;top:116px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 104,
			height: 19,
			style: 'position:absolute;left:105px;top:116px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерсональныеДанные',
			text: 'Основные данные',
			style: 'position:absolute;left:10px;top:10px;width:243px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:20px;top:44px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:20px;top:140px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 104,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:105px;top:140px;width:104px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 280,
			height: 19,
			style: 'position:absolute;left:105px;top:68px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 280,
			height: 19,
			style: 'position:absolute;left:105px;top:92px;width:280px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:20px;top:68px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:20px;top:92px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТабельныйНомер',
			text: 'Таб. номер:',
			style: 'position:absolute;left:20px;top:280px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТабельныйНомер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:105px;top:280px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:254px;width:402px;height:26px;',
			height: 26,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 280,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:0px;width:280px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора',
			text: 'Организация:',
			style: 'position:absolute;left:10px;top:0px;width:83px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Штатный сотрудник',
			style: 'position:absolute;left:20px;top:174px;width:118px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Работник по договору гражданско-правового характера',
			style: 'position:absolute;left:20px;top:198px;width:314px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Без договора',
			style: 'position:absolute;left:20px;top:222px;width:96px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМестоРаботы',
			text: 'Место работы',
			style: 'position:absolute;left:10px;top:10px;width:219px;height:25px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:35px;width:402px;height:384px;',
			height: 384,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости',
			text: 'Вид занятости',
			style: 'position:absolute;left:10px;top:35px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:27px;top:303px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДоговора',
			width: 90,
			height: 19,
			style: 'position:absolute;left:97px;top:303px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДоговора',
			text: 'от:',
			style: 'position:absolute;left:188px;top:303px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДоговора',
			width: 90,
			height: 19,
			style: 'position:absolute;left:213px;top:303px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Принять с:',
			style: 'position:absolute;left:11px;top:250px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 90,
			height: 19,
			style: 'position:absolute;left:97px;top:250px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'Для срочного договора дата оконч.:',
			style: 'position:absolute;left:27px;top:328px;width:184px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 90,
			height: 19,
			style: 'position:absolute;left:213px;top:328px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИспытательныйСрок',
			text: 'Испытательный срок, месяцев:',
			style: 'position:absolute;left:192px;top:226px;width:165px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИспытательныйСрок',
			style: 'position:absolute;left:359px;top:226px;width:43px;height:19px;',
			width: 43,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:10px;top:154px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:154px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:11px;top:178px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			name: 'Должность.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:178px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикРаботы',
			text: 'График работы:',
			style: 'position:absolute;left:11px;top:202px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ГрафикРаботы.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:202px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗанимаемыхСтавок',
			text: 'Кол. ставок:',
			style: 'position:absolute;left:11px;top:226px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗанимаемыхСтавок',
			style: 'position:absolute;left:97px;top:226px;width:43px;height:19px;',
			width: 43,
			height: 19,
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:1px;top:125px;width:401px;height:24px;',
			height: 24,width: 401,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбособленноеПодразделение',
			text: 'Обособл. подр.:',
			style: 'position:absolute;left:10px;top:5px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОбособленноеПодразделение.Представление',
			width: 304,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:5px;width:304px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтракт',
			text: 'Трудовой договор',
			style: 'position:absolute;left:10px;top:279px;width:141px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:25px;',
			height: 25,width: 348,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Создать приказ о приеме на работу',
			style: 'position:absolute;left:11px;top:10px;width:242px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является студентом работающим в студенческом отряде',
			style: 'position:absolute;left:10px;top:356px;width:320px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Основное место работы',
			style: 'position:absolute;left:21px;top:59px;width:146px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Совместительство',
			style: 'position:absolute;left:21px;top:83px;width:117px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внутреннее совместительство',
			style: 'position:absolute;left:21px;top:106px;width:180px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости1',
			text: 'Вид договора гражданско-правового характера',
			style: 'position:absolute;left:10px;top:0px;width:305px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Авторский',
			style: 'position:absolute;left:20px;top:48px;width:78px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Создать договор на выполнение работ с физлицом',
			style: 'position:absolute;left:10px;top:77px;width:315px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:92px;width:402px;height:292px;',
			height: 292,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУсловияДоговора',
			text: 'Условия договора',
			style: 'position:absolute;left:10px;top:53px;width:134px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Сроки, с:',
			style: 'position:absolute;left:20px;top:74px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаДоговораГПХ',
			width: 91,
			height: 19,
			style: 'position:absolute;left:107px;top:74px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'по:',
			style: 'position:absolute;left:204px;top:74px;width:41px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияДоговораГПХ',
			width: 100,
			height: 19,
			style: 'position:absolute;left:248px;top:74px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДоговораГПХ',
			text: 'Валюта:',
			style: 'position:absolute;left:218px;top:146px;width:41px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВалютаДоговораГПХ.Представление',
			width: 86,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:262px;top:146px;width:86px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Стоимость:',
			style: 'position:absolute;left:20px;top:146px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаЗаРаботу',
			style: 'position:absolute;left:107px;top:146px;width:95px;height:19px;',
			width: 95,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчетаДоговорГПХ.Представление',
			width: 295,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:98px;width:295px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Начисление:',
			style: 'position:absolute;left:20px;top:98px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Оплата:',
			style: 'position:absolute;left:20px;top:122px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ХарактерОплаты.Представление',
			width: 295,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:122px;width:295px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КодВычета.Представление',
			width: 241,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:170px;width:241px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКодВычета',
			text: 'Код вычета:',
			style: 'position:absolute;left:20px;top:170px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБухучетДоговора',
			text: 'Бухучет',
			style: 'position:absolute;left:10px;top:193px;width:68px;height:18px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СпособОтраженияВБухучете.Представление',
			width: 392,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:10px;top:211px;width:392px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтнесениеРасходовКДеятельностиЕНВД',
			text: 'Отнесение расходов к деятельности ЕНВД:',
			style: 'position:absolute;left:10px;top:232px;width:224px;height:15px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОтнесениеРасходовКДеятельностиЕНВД.Представление',
			width: 392,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:10px;top:247px;width:392px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:24px;',
			height: 24,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбособленноеПодразделение1',
			text: 'Обособл. подр.:',
			style: 'position:absolute;left:10px;top:5px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОбособленноеПодразделение1.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:5px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации1.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:29px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации2',
			text: 'Подразделение:',
			style: 'position:absolute;left:10px;top:29px;width:85px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидАвторскогоДоговора.Представление',
			width: 302,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:48px;width:302px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Договор подряда (выполнение работ, оказание услуг)',
			style: 'position:absolute;left:20px;top:24px;width:305px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:25px;',
			height: 25,width: 348,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Создать приказ о приеме на работу',
			style: 'position:absolute;left:11px;top:10px;width:242px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:35px;width:402px;height:173px;',
			height: 173,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПодразделениеУпр.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:0px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДолжностьУпр.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:25px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ГрафикРаботыУпр.Представление',
			width: 305,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:49px;width:305px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПриемаУпр',
			width: 90,
			height: 19,
			style: 'position:absolute;left:97px;top:73px;width:90px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗанимаемыхСтавокУпр',
			style: 'position:absolute;left:97px;top:97px;width:43px;height:19px;',
			width: 43,
			height: 19,
		},
					]
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОплатаТруда',
			text: 'Оплата труда',
			style: 'position:absolute;left:10px;top:10px;width:149px;height:25px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:35px;width:402px;height:384px;',
			height: 384,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Основной вид начисления:',
			style: 'position:absolute;left:10px;top:10px;width:137px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчета.Представление',
			width: 253,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:149px;top:10px;width:253px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'ПерсональныеНадбавки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:106px;width:402px;height:278px;',
			height: 278,width: 402,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Надбавка',
					width:'120',
					dataIndex:'Надбавка',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'245',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд 1',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','Надбавка','Показатели','НаименованиеПоказатель1','Показатель1','Валюта1','НаименованиеПоказательТР1','ТарифныйРазряд1','НаименованиеПоказатель2','Показатель2','Валюта2','НаименованиеПоказательТР2','ТарифныйРазряд2','НаименованиеПоказатель3','Показатель3','Валюта3','НаименованиеПоказательТР3','ТарифныйРазряд3','НаименованиеПоказатель4','Показатель4','Валюта4','НаименованиеПоказательТР4','ТарифныйРазряд4','НаименованиеПоказатель5','Показатель5','Валюта5','НаименованиеПоказательТР5','ТарифныйРазряд5','НаименованиеПоказатель6','Показатель6','Валюта6','НаименованиеПоказательТР6','ТарифныйРазряд6',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Надбавка',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказательТР1',
					},
					{
						name:'ТарифныйРазряд1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказательТР2',
					},
					{
						name:'ТарифныйРазряд2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказательТР3',
					},
					{
						name:'ТарифныйРазряд3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказательТР4',
					},
					{
						name:'ТарифныйРазряд4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказательТР5',
					},
					{
						name:'ТарифныйРазряд5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'НаименованиеПоказательТР6',
					},
					{
						name:'ТарифныйРазряд6',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ПерсональныеНадбавки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:29px;width:402px;height:24px;',
			height: 24,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавка',
			style: 'position:absolute;left:150px;top:5px;width:91px;height:19px;',
			width: 91,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаТарифнойСтавки',
			text: 'Валюта:',
			style: 'position:absolute;left:280px;top:5px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаТарифнойСтавки.Представление',
			width: 77,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:325px;top:5px;width:77px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОклад',
			text: 'Размер:',
			style: 'position:absolute;left:10px;top:5px;width:137px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТарифныйРазряд',
			text: 'Тарифный разряд:',
			style: 'position:absolute;left:10px;top:5px;width:137px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТарифныйРазряд.Представление',
			width: 199,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:149px;top:5px;width:199px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСписокНадбавок',
			text: 'Надбавки по трудовому договору',
			style: 'position:absolute;left:0px;top:63px;width:402px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:82px;width:402px;height:24px;',
			width: 402,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:119px;top:218px;width:217px;height:24px;',
			width: 217,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНачисления',
			text: 'Начисления',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:19px;text-align:left;',
		},
		{
			id: 'НачисленияУпр',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:42px;width:402px;height:152px;',
			height: 152,width: 402,
			columns:
			[
				{
					text:'Вид расчета',
					width:'100',
					dataIndex:'ВидРасчета.Представление',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'245',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд 1',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'120',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','ВидРасчета.Представление','Показатели','НаименованиеПоказатель1','Показатель1','Валюта1','НаименованиеПоказательТР1','ТарифныйРазряд1','НаименованиеПоказатель2','Показатель2','Валюта2','НаименованиеПоказательТР2','ТарифныйРазряд2','НаименованиеПоказатель3','Показатель3','Валюта3','НаименованиеПоказательТР3','ТарифныйРазряд3','НаименованиеПоказатель4','Показатель4','Валюта4','НаименованиеПоказательТР4','ТарифныйРазряд4','НаименованиеПоказатель5','Показатель5','Валюта5','НаименованиеПоказательТР5','ТарифныйРазряд5','НаименованиеПоказатель6','Показатель6','Валюта6','НаименованиеПоказательТР6','ТарифныйРазряд6',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказательТР1',
					},
					{
						name:'ТарифныйРазряд1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказательТР2',
					},
					{
						name:'ТарифныйРазряд2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказательТР3',
					},
					{
						name:'ТарифныйРазряд3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказательТР4',
					},
					{
						name:'ТарифныйРазряд4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказательТР5',
					},
					{
						name:'ТарифныйРазряд5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'НаименованиеПоказательТР6',
					},
					{
						name:'ТарифныйРазряд6',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('НачисленияУпр');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВзыскания',
			text: 'Взыскания',
			style: 'position:absolute;left:0px;top:203px;width:348px;height:19px;text-align:left;',
		},
		{
			id: 'УдержанияУпр',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:246px;width:402px;height:138px;',
			height: 138,width: 402,
			columns:
			[
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета.Представление',
					flex:1,
				},
				{
					text:'Показатели для расчета взыскания',
					width:'245',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'120',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','ВидРасчета.Представление','Показатели','НаименованиеПоказатель1','Показатель1','Валюта1','НаименованиеПоказатель2','Показатель2','Валюта2','НаименованиеПоказатель3','Показатель3','Валюта3','НаименованиеПоказатель4','Показатель4','Валюта4','НаименованиеПоказатель5','Показатель5','Валюта5','НаименованиеПоказатель6','Показатель6','Валюта6',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('УдержанияУпр');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:402px;height:24px;',
			width: 402,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:74px;top:136px;width:217px;height:24px;',
			width: 217,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:222px;width:402px;height:24px;',
			width: 402,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:86px;top:296px;width:217px;height:24px;',
			width: 217,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДополнительнаяИнформация',
			text: 'Дополнительная информация',
			style: 'position:absolute;left:10px;top:10px;width:325px;height:25px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:197px;width:402px;height:165px;',
			height: 165,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьГруппаДоступа',
			text: 'В настройках программы задано ограничение доступа к данным сотрудников. Вам необходимо указать группу, в которую входит новый сотрудник.',
			style: 'position:absolute;left:10px;top:9px;width:392px;height:39px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ГруппаДоступа.Представление',
			width: 372,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:10px;top:51px;width:372px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаПомощникСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияГруппаДоступа',
			text: 'Данные по этому физлицу НЕДОСТУПНЫ для всех пользователей, которым установлено ограничение доступа по физлицам',
			style: 'position:absolute;left:10px;top:74px;width:392px;height:44px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:91px;width:402px;height:106px;',
			height: 106,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтандартныеНалоговыеВычеты',
			text: 'Стандартные налоговые вычеты, справка с предыдущего места работы, статус налогоплательщика',
			style: 'position:absolute;left:20px;top:66px;width:363px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДляРасчетаНДФЛиЕСН1',
			text: 'Данные для расчета НДФЛ и страховых взносов',
			style: 'position:absolute;left:10px;top:5px;width:319px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство1',
			text: 'Гражданство, право на пенсию',
			style: 'position:absolute;left:20px;top:26px;width:363px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвалидность',
			text: 'Инвалидность (если имеется)',
			style: 'position:absolute;left:20px;top:47px;width:363px;height:16px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДляРасчетаНДФЛиЕСН',
			text: 'Данные для расчета НДФЛ и страховых взносов',
			style: 'position:absolute;left:10px;top:5px;width:319px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство, право на пенсию',
			style: 'position:absolute;left:10px;top:26px;width:368px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвалидность1',
			text: 'Инвалидность (если имеется)',
			style: 'position:absolute;left:10px;top:47px;width:368px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус налогоплательщика',
			style: 'position:absolute;left:10px;top:67px;width:368px;height:18px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:10px;top:35px;width:402px;height:56px;',
			height: 56,width: 402,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР',
			width: 104,
			height: 19,
			style: 'position:absolute;left:84px;top:27px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 104,
			height: 19,
			style: 'position:absolute;left:84px;top:5px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'Номер ПФР:',
			style: 'position:absolute;left:10px;top:27px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:10px;top:5px;width:72px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПостфиксНаименования',
			width: 93,
			height: 19,
			style: 'position:absolute;left:72px;top:121px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вы можете добавить уточнение для того, чтобы различать сотрудников с одинаковыми ФИО.',
			style: 'position:absolute;left:10px;top:80px;width:348px;height:34px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗавершениеРаботы',
			text: 'Завершение работы',
			style: 'position:absolute;left:10px;top:10px;width:246px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСотрудника',
			text: 'Отображать в программе как:',
			style: 'position:absolute;left:10px;top:42px;width:155px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеСотрудника',
			width: 402,
			height: 19,
			style: 'position:absolute;left:10px;top:61px;width:402px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСотрудника1',
			text: 'Уточнение:',
			style: 'position:absolute;left:10px;top:121px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Больше не использовать помощника',
			style: 'position:absolute;left:10px;top:374px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация1',
			text: 'НадписьИнформация1',
			style: 'position:absolute;left:20px;top:194px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация2',
			text: 'НадписьИнформация2',
			style: 'position:absolute;left:20px;top:223px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация3',
			text: 'НадписьИнформация3',
			style: 'position:absolute;left:20px;top:252px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОРаботеПомощника',
			text: ' По окончании работы Помощника будут созданы:',
			style: 'position:absolute;left:10px;top:165px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация4',
			text: 'НадписьИнформация4',
			style: 'position:absolute;left:20px;top:281px;width:338px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:425px;',
			height: 425,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьХод1',
			text: 'Основные данные',
			style: 'position:absolute;left:11px;top:10px;width:160px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХод2',
			text: 'Место работы/вид договора',
			style: 'position:absolute;left:11px;top:35px;width:160px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХод3',
			text: 'Оплата труда',
			style: 'position:absolute;left:11px;top:60px;width:160px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХод4',
			text: 'Доп. информация',
			style: 'position:absolute;left:11px;top:85px;width:160px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХод5',
			text: 'Завершение работы',
			style: 'position:absolute;left:11px;top:110px;width:160px;height:25px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРазделитель',
			text: 'НадписьРазделитель',
			style: 'position:absolute;left:181px;top:0px;width:28px;height:425px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:600px;height:25px;',
			width: 600,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Далее',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:324px;top:425px;width:151px;height:25px;',
			width: 151,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
				},
			]
		},
	]
	});
});