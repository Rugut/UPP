Ext.require(['Данные.Справочники.СотрудникиОрганизаций'], function () 
{
	Ext.define('Справочники.СотрудникиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:506px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сотрудники',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			width: 650,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Данные сотрудника',
					tooltip:'',
				},
				'-',
				{
					text:'Медицинские страховые полисы',
					tooltip:'Медицинские страховые полисы',
				},
					]
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:480px;top:33px;width:212px;height:440px;',
			height: 440,width: 212,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗакрытьСправкуФормы',
			text: 'Скрыть эту информацию о справочнике',
			style: 'position:absolute;left:0px;top:403px;width:210px;height:35px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:466px;height:440px;',
			height: 440,width: 466,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:2px;top:0px;width:464px;height:69px;',
			height: 69,width: 464,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Создать нового сотрудника и ввести его личные данные в справочник физических лиц',
			style: 'position:absolute;left:3px;top:3px;width:267px;height:28px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Создать нового сотрудника, выбрав его из справочника физических лиц',
			style: 'position:absolute;left:3px;top:36px;width:242px;height:28px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:142px;width:466px;height:275px;',
			height: 275,width: 466,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:11px;top:49px;width:82px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Пол.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:49px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:11px;top:26px;width:82px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 100,
			height: 19,
			style: 'position:absolute;left:95px;top:26px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 90,
			height: 19,
			style: 'position:absolute;left:368px;top:49px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:338px;top:49px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодИМНС',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:226px;top:49px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИМНС',
			width: 42,
			height: 19,
			style: 'position:absolute;left:292px;top:49px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР',
			width: 90,
			height: 19,
			style: 'position:absolute;left:368px;top:26px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСотрудника',
			text: 'Наименование:',
			style: 'position:absolute;left:11px;top:116px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТабНомер',
			text: 'Табельный №:',
			style: 'position:absolute;left:11px;top:209px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора',
			text: 'Вид договора:',
			style: 'position:absolute;left:11px;top:139px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости',
			text: 'Вид занятости:',
			style: 'position:absolute;left:11px;top:186px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:11px;top:162px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Личные данные',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Данные сотрудника',
			style: 'position:absolute;left:6px;top:96px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'ПерейтиКВводуТрудовогоДоговора',
			text: 'Перейти к вводу данных трудового договора...',
			style: 'position:absolute;left:212px;top:209px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РедактироватьФизлицоОтдельно',
			text: 'Более подробно о физическом лице Сергеев Иван Ильич ...',
			style: 'position:absolute;left:11px;top:72px;width:447px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидЗанятости.Представление',
			width: 239,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:186px;width:239px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'Организация.Представление',
			width: 239,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:162px;width:239px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 100,
			height: 19,
			style: 'position:absolute;left:95px;top:209px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПередставлениеНаименования',
			width: 349,
			height: 19,
			style: 'position:absolute;left:95px;top:116px;width:349px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:116px;width:363px;height:19px;',
			width: 363,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидДоговора.Представление',
			width: 239,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:139px;width:239px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является студентом работающим в студенческом отряде',
			style: 'position:absolute;left:95px;top:235px;width:320px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерДоговора',
			text: 'Договор №:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:174px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Действует с:',
			style: 'position:absolute;left:6px;top:29px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:174px;top:29px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбособленноеПодразделение',
			text: 'Обособл. подр.:',
			style: 'position:absolute;left:6px;top:52px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:75px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:6px;top:98px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИспытательныйСрок',
			text: 'Испытание на срок, мес.:',
			style: 'position:absolute;left:280px;top:29px;width:141px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗанимаемыхСтавок',
			text: 'Кол. ставок:',
			style: 'position:absolute;left:348px;top:121px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикРаботы',
			text: 'График работы:',
			style: 'position:absolute;left:6px;top:121px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаТарифнойСтавки',
			text: 'Валюта:',
			style: 'position:absolute;left:220px;top:187px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид расчета:',
			style: 'position:absolute;left:11px;top:164px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавка',
			text: 'Тариф \ Оклад:',
			style: 'position:absolute;left:11px;top:187px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Основная оплата при приеме на работу',
			style: 'position:absolute;left:6px;top:144px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадбавкиПоТрудовомуДоговоруТекст',
			text: 'Надбавки по трудовому договору ...',
			style: 'position:absolute;left:11px;top:211px;width:447px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДоговора',
			width: 80,
			height: 19,
			style: 'position:absolute;left:92px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДоговора',
			width: 80,
			height: 19,
			style: 'position:absolute;left:192px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:92px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:192px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИспытательныйСрок',
			style: 'position:absolute;left:423px;top:29px;width:35px;height:19px;',
			width: 35,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОбособленноеПодразделение.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:52px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:75px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Должность.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:98px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'ГрафикРаботы.Представление',
			width: 253,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:121px;width:253px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗанимаемыхСтавок',
			style: 'position:absolute;left:414px;top:121px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчета.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:164px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'ВалютаТарифнойСтавки.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:265px;top:187px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавка',
			style: 'position:absolute;left:96px;top:187px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТарифныйРазряд.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:187px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:223px;height:226px;',
			height: 226,width: 223,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Свойство','Значение',]
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
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСвойства',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:59px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:23px;top:101px;width:77px;height:24px;',
			width: 77,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:23px;width:223px;height:226px;',
			height: 226,width: 223,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'257',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Принадлежность','Категория',]
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
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории',
			text: 'Категории',
			style: 'position:absolute;left:235px;top:6px;width:67px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:13px;top:146px;width:77px;height:24px;',
			width: 77,
			height: 24,
			items:
			[
				{
					text:'&Добавить новую категорию',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:0px;top:79px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеФизлица',
			width: 421,
			height: 19,
			style: 'position:absolute;left:45px;top:79px;width:421px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'ФИО:',
			style: 'position:absolute;left:0px;top:101px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 167,
			height: 19,
			style: 'position:absolute;left:45px;top:101px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 125,
			height: 19,
			style: 'position:absolute;left:214px;top:101px;width:125px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 125,
			height: 19,
			style: 'position:absolute;left:341px;top:101px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа',
			text: 'Группа сотрудника:',
			style: 'position:absolute;left:0px;top:421px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 363,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:103px;top:421px;width:363px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'ПерейтиКВводуГруппыДоступа',
			text: 'Введите группу доступа для физического лица ...',
			style: 'position:absolute;left:0px;top:123px;width:466px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Физлицо.Представление',
			width: 421,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:45px;top:79px;width:421px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСотрудника1',
			text: 'Наименование:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:0px;width:250px;height:19px;',
			width: 250,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКод1',
			text: 'Табельный №:',
			style: 'position:absolute;left:0px;top:23px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора1',
			text: 'Вид договора:',
			style: 'position:absolute;left:0px;top:46px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости1',
			text: 'Вид занятости:',
			style: 'position:absolute;left:0px;top:95px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация1',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:71px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:119px;width:466px;height:298px;',
			height: 298,width: 466,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПол1',
			text: 'Пол:',
			style: 'position:absolute;left:6px;top:29px;width:82px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Пол1.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:29px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения1',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения1',
			width: 100,
			height: 19,
			style: 'position:absolute;left:90px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН1',
			width: 90,
			height: 19,
			style: 'position:absolute;left:368px;top:29px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИМНС1',
			width: 42,
			height: 19,
			style: 'position:absolute;left:292px;top:29px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР1',
			width: 90,
			height: 19,
			style: 'position:absolute;left:368px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РедактироватьФизлицоОтдельно1',
			text: 'Более подробно о физическом лице Сергеев Иван Ильич ...',
			style: 'position:absolute;left:6px;top:52px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Налоговые вычеты, статус налогоплательщика',
			style: 'position:absolute;left:6px;top:120px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:74px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Гражданство',
			width: 355,
			height: 19,
			style: 'position:absolute;left:103px;top:74px;width:355px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Инвалидность',
			style: 'position:absolute;left:103px;top:97px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвалидность',
			text: 'Инвалидность:',
			style: 'position:absolute;left:6px;top:97px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство1',
			text: 'Стандартные:',
			style: 'position:absolute;left:11px;top:141px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтандартныеВычеты',
			width: 355,
			height: 19,
			style: 'position:absolute;left:103px;top:141px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство2',
			text: 'Имущественные:',
			style: 'position:absolute;left:11px;top:166px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмущественныеВычеты',
			width: 355,
			height: 19,
			style: 'position:absolute;left:103px;top:166px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщикаПоНДФЛ',
			text: 'Статус:',
			style: 'position:absolute;left:11px;top:191px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатусНалогоплательщика',
			width: 355,
			height: 19,
			style: 'position:absolute;left:103px;top:191px;width:355px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является студентом работающим в студенческом отряде',
			style: 'position:absolute;left:103px;top:217px;width:323px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Место работы',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'МестоРаботы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:63px;',
			height: 63,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Действует с',
					width:'74',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'100',
					dataIndex:'ДатаЗавершения',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'152',
					dataIndex:'ПодразделениеОрганизации.Представление',
					flex:1,
				},
				{
					text:'Подразделение завершения',
					width:'100',
					dataIndex:'ПодразделениеОрганизацииЗавершения',
					flex:1,
				},
				{
					text:'Должность',
					width:'107',
					dataIndex:'Должность.Представление',
					flex:1,
				},
				{
					text:'Должность завершения',
					width:'100',
					dataIndex:'ДолжностьЗавершения',
					flex:1,
				},
				{
					text:'График работы',
					width:'110',
					dataIndex:'ГрафикРаботы.Представление',
					flex:1,
				},
				{
					text:'График работы завершения',
					width:'100',
					dataIndex:'ГрафикРаботыЗавершения',
					flex:1,
				},
				{
					text:'Занимаемых ставок',
					width:'83',
					dataIndex:'ЗанимаемыхСтавок',
					flex:1,
				},
				{
					text:'Занимаемых ставок завершения',
					width:'100',
					dataIndex:'ЗанимаемыхСтавокЗавершения',
					flex:1,
				},
				{
					text:'Причина изменения состояния',
					width:'100',
					dataIndex:'ПричинаИзмененияСостояния',
					flex:1,
				},
				{
					text:'Причина изменения состояния завершения',
					width:'100',
					dataIndex:'ПричинаИзмененияСостоянияЗавершения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Период','ДатаЗавершения','ПодразделениеОрганизации.Представление','ПодразделениеОрганизацииЗавершения','Должность.Представление','ДолжностьЗавершения','ГрафикРаботы.Представление','ГрафикРаботыЗавершения','ЗанимаемыхСтавок','ЗанимаемыхСтавокЗавершения','ПричинаИзмененияСостояния','ПричинаИзмененияСостоянияЗавершения',]
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
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаЗавершения',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'ПодразделениеОрганизацииЗавершения',
					},
					{
						name:'Должность',
					},
					{
						name:'ДолжностьЗавершения',
					},
					{
						name:'ГрафикРаботы',
					},
					{
						name:'ГрафикРаботыЗавершения',
					},
					{
						name:'ЗанимаемыхСтавок',
					},
					{
						name:'ЗанимаемыхСтавокЗавершения',
					},
					{
						name:'ПричинаИзмененияСостояния',
					},
					{
						name:'ПричинаИзмененияСостоянияЗавершения',
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
						var грид = Ext.getCmp('МестоРаботы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'КадровыеДокументы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:128px;width:452px;height:144px;',
			height: 144,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','ВидДокумента','Дата','Номер',]
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
						name:'Картинка',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
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
						var грид = Ext.getCmp('КадровыеДокументы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Кадровые документы',
			style: 'position:absolute;left:6px;top:88px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:104px;width:452px;height:24px;',
			width: 452,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПлановыеНачисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:128px;',
			height: 128,width: 452,
			columns:
			[
				{
					text:'Действие',
					width:'65',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Действует с',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'200',
					dataIndex:'ВидРасчета.Представление',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'235',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
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
					width:'110',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
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
					text:'Показатель для ТР',
					width:'110',
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
					width:'110',
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
					text:'Показатель для ТР',
					width:'110',
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
					width:'110',
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
					text:'Показатель для ТР',
					width:'110',
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
					width:'110',
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
					text:'Показатель для ТР',
					width:'110',
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
					width:'110',
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
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
				{
					text:'Действие по окончании',
					width:'100',
					dataIndex:'ДействиеЗавершения',
					flex:1,
				},
				{
					text:'Действует с',
					width:'85',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Вид расчета по окончании',
					width:'120',
					dataIndex:'ВидРасчетаЗавершения',
					flex:1,
				},
				{
					text:'Показатели для расчета по окончании',
					width:'235',
					dataIndex:'ПоказателиЗавершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1Завершения',
					flex:1,
				},
				{
					text:'Размер',
					width:'80',
					dataIndex:'Показатель1Завершения',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта1Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР1Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2Завершения',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2Завершения',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР2Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3Завершения',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3Завершения',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР3Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4Завершения',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4Завершения',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР4Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5Завершения',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5Завершения',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР5Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
					dataIndex:'ТарифныйРазряд5Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6Завершения',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6Завершения',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР6Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6Завершения',
					flex:1,
				},
				{
					text:'Регистратор',
					width:'100',
					dataIndex:'Регистратор',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Действие','Период','ВидРасчета.Представление','Показатели','НаименованиеПоказатель1','Показатель1','Валюта1','НаименованиеПоказательТР1','ТарифныйРазряд1','НаименованиеПоказатель2','Показатель2','Валюта2','НаименованиеПоказательТР2','ТарифныйРазряд2','НаименованиеПоказатель3','Показатель3','Валюта3','НаименованиеПоказательТР3','ТарифныйРазряд3','НаименованиеПоказатель4','Показатель4','Валюта4','НаименованиеПоказательТР4','ТарифныйРазряд4','НаименованиеПоказатель5','Показатель5','Валюта5','НаименованиеПоказательТР5','ТарифныйРазряд5','НаименованиеПоказатель6','Показатель6','Валюта6','НаименованиеПоказательТР6','ТарифныйРазряд6','ДействиеЗавершения','ПериодЗавершения','ВидРасчетаЗавершения','ПоказателиЗавершения','НаименованиеПоказатель1Завершения','Показатель1Завершения','Валюта1Завершения','НаименованиеПоказательТР1Завершения','ТарифныйРазряд1Завершения','НаименованиеПоказатель2Завершения','Показатель2Завершения','Валюта2Завершения','НаименованиеПоказательТР2Завершения','ТарифныйРазряд2Завершения','НаименованиеПоказатель3Завершения','Показатель3Завершения','Валюта3Завершения','НаименованиеПоказательТР3Завершения','ТарифныйРазряд3Завершения','НаименованиеПоказатель4Завершения','Показатель4Завершения','Валюта4Завершения','НаименованиеПоказательТР4Завершения','ТарифныйРазряд4Завершения','НаименованиеПоказатель5Завершения','Показатель5Завершения','Валюта5Завершения','НаименованиеПоказательТР5Завершения','ТарифныйРазряд5Завершения','НаименованиеПоказатель6Завершения','Показатель6Завершения','Валюта6Завершения','НаименованиеПоказательТР6Завершения','ТарифныйРазряд6Завершения','Регистратор',]
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
						name:'Действие',
					},
					{
						name:'Период',
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
					{
						name:'ДействиеЗавершения',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ВидРасчетаЗавершения',
					},
					{
						name:'ПоказателиЗавершения',
					},
					{
						name:'НаименованиеПоказатель1Завершения',
					},
					{
						name:'Показатель1Завершения',
					},
					{
						name:'Валюта1Завершения',
					},
					{
						name:'НаименованиеПоказательТР1Завершения',
					},
					{
						name:'ТарифныйРазряд1Завершения',
					},
					{
						name:'НаименованиеПоказатель2Завершения',
					},
					{
						name:'Показатель2Завершения',
					},
					{
						name:'Валюта2Завершения',
					},
					{
						name:'НаименованиеПоказательТР2Завершения',
					},
					{
						name:'ТарифныйРазряд2Завершения',
					},
					{
						name:'НаименованиеПоказатель3Завершения',
					},
					{
						name:'Показатель3Завершения',
					},
					{
						name:'Валюта3Завершения',
					},
					{
						name:'НаименованиеПоказательТР3Завершения',
					},
					{
						name:'ТарифныйРазряд3Завершения',
					},
					{
						name:'НаименованиеПоказатель4Завершения',
					},
					{
						name:'Показатель4Завершения',
					},
					{
						name:'Валюта4Завершения',
					},
					{
						name:'НаименованиеПоказательТР4Завершения',
					},
					{
						name:'ТарифныйРазряд4Завершения',
					},
					{
						name:'НаименованиеПоказатель5Завершения',
					},
					{
						name:'Показатель5Завершения',
					},
					{
						name:'Валюта5Завершения',
					},
					{
						name:'НаименованиеПоказательТР5Завершения',
					},
					{
						name:'ТарифныйРазряд5Завершения',
					},
					{
						name:'НаименованиеПоказатель6Завершения',
					},
					{
						name:'Показатель6Завершения',
					},
					{
						name:'Валюта6Завершения',
					},
					{
						name:'НаименованиеПоказательТР6Завершения',
					},
					{
						name:'ТарифныйРазряд6Завершения',
					},
					{
						name:'Регистратор',
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
						var грид = Ext.getCmp('ПлановыеНачисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Плановые начисления',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Плановые удержания',
			style: 'position:absolute;left:6px;top:157px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ПлановыеУдержания',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:174px;width:452px;height:97px;',
			height: 97,width: 452,
			columns:
			[
				{
					text:'Действие',
					width:'60',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Действует с',
					width:'66',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'110',
					dataIndex:'ВидРасчета.Представление',
					flex:1,
				},
				{
					text:'Показатели для расчета удержания',
					width:'235',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Показатель 1',
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
					width:'110',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Показатель 2',
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
					width:'110',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Показатель 3',
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
					width:'110',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Показатель 4',
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
					width:'110',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Показатель 5',
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
					width:'110',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Показатель 6',
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
				{
					text:'Действие по окончании',
					width:'82',
					dataIndex:'ДействиеЗавершения',
					flex:1,
				},
				{
					text:'Действует с',
					width:'82',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Показатели для расчета по окончании',
					width:'235',
					dataIndex:'ПоказателиЗавершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1Завершения',
					flex:1,
				},
				{
					text:'Показатель 1',
					width:'80',
					dataIndex:'Показатель1Завершения',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2Завершения',
					flex:1,
				},
				{
					text:'Показатель 2',
					width:'80',
					dataIndex:'Показатель2Завершения',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3Завершения',
					flex:1,
				},
				{
					text:'Показатель 3',
					width:'80',
					dataIndex:'Показатель3Завершения',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4Завершения',
					flex:1,
				},
				{
					text:'Показатель 4',
					width:'80',
					dataIndex:'Показатель4Завершения',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5Завершения',
					flex:1,
				},
				{
					text:'Показатель 5',
					width:'80',
					dataIndex:'Показатель5Завершения',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6Завершения',
					flex:1,
				},
				{
					text:'Показатель 6',
					width:'80',
					dataIndex:'Показатель6Завершения',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6Завершения',
					flex:1,
				},
				{
					text:'Регистратор',
					width:'100',
					dataIndex:'Регистратор',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Действие','Дата','ВидРасчета.Представление','Показатели','НаименованиеПоказатель1','Показатель1','Валюта1','НаименованиеПоказатель2','Показатель2','Валюта2','НаименованиеПоказатель3','Показатель3','Валюта3','НаименованиеПоказатель4','Показатель4','Валюта4','НаименованиеПоказатель5','Показатель5','Валюта5','НаименованиеПоказатель6','Показатель6','Валюта6','ДействиеЗавершения','ПериодЗавершения','ПоказателиЗавершения','НаименованиеПоказатель1Завершения','Показатель1Завершения','Валюта1Завершения','НаименованиеПоказатель2Завершения','Показатель2Завершения','Валюта2Завершения','НаименованиеПоказатель3Завершения','Показатель3Завершения','Валюта3Завершения','НаименованиеПоказатель4Завершения','Показатель4Завершения','Валюта4Завершения','НаименованиеПоказатель5Завершения','Показатель5Завершения','Валюта5Завершения','НаименованиеПоказатель6Завершения','Показатель6Завершения','Валюта6Завершения','Регистратор',]
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
						name:'Действие',
					},
					{
						name:'Дата',
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
					{
						name:'ДействиеЗавершения',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ПоказателиЗавершения',
					},
					{
						name:'НаименованиеПоказатель1Завершения',
					},
					{
						name:'Показатель1Завершения',
					},
					{
						name:'Валюта1Завершения',
					},
					{
						name:'НаименованиеПоказатель2Завершения',
					},
					{
						name:'Показатель2Завершения',
					},
					{
						name:'Валюта2Завершения',
					},
					{
						name:'НаименованиеПоказатель3Завершения',
					},
					{
						name:'Показатель3Завершения',
					},
					{
						name:'Валюта3Завершения',
					},
					{
						name:'НаименованиеПоказатель4Завершения',
					},
					{
						name:'Показатель4Завершения',
					},
					{
						name:'Валюта4Завершения',
					},
					{
						name:'НаименованиеПоказатель5Завершения',
					},
					{
						name:'Показатель5Завершения',
					},
					{
						name:'Валюта5Завершения',
					},
					{
						name:'НаименованиеПоказатель6Завершения',
					},
					{
						name:'Показатель6Завершения',
					},
					{
						name:'Валюта6Завершения',
					},
					{
						name:'Регистратор',
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
						var грид = Ext.getCmp('ПлановыеУдержания');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:324px;top:66px;width:125px;height:24px;',
			width: 125,
			height: 24,
			items:
			[
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:316px;top:194px;width:125px;height:24px;',
			width: 125,
			height: 24,
			items:
			[
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ОтражениеПлановыхНачислений',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:170px;width:452px;height:102px;',
			height: 102,width: 452,
			columns:
			[
				{
					text:'Действует с',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета.Представление',
					flex:1,
				},
				{
					text:'Способ отражения в бухучете',
					width:'120',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'Код дохода ЕСН',
					width:'120',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Отнесение расходов к деятельности ЕНВД',
					width:'60',
					dataIndex:'ОтнесениеРасходовКДеятельностиЕНВД',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Период','ВидРасчета.Представление','СпособОтраженияВБухучете','КодДоходаЕСН','ОтнесениеРасходовКДеятельностиЕНВД',]
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
						name:'Период',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'ОтнесениеРасходовКДеятельностиЕНВД',
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
						var грид = Ext.getCmp('ОтражениеПлановыхНачислений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Отражение в учете плановых начислений',
			style: 'position:absolute;left:6px;top:130px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Отражение в учете основных начислений',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ОтражениеОсновныхНачислений',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:452px;height:77px;',
			height: 77,width: 452,
			columns:
			[
				{
					text:'Действует с',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Способ отражения в бухучете',
					width:'120',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'До 2011 года. Способ отражения в бухучете больничного за счет работодателя',
					width:'120',
					dataIndex:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'35',
					dataIndex:'ПодпадаетПодЕНВД',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Период','СпособОтраженияВБухучете','СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя','ПодпадаетПодЕНВД',]
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
						name:'Период',
					},
					{
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
					},
					{
						name:'ПодпадаетПодЕНВД',
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
						var грид = Ext.getCmp('ОтражениеОсновныхНачислений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:452px;height:24px;',
			width: 452,
			height: 24,
			items:
			[
				{
					text:'Показать историю ...',
					tooltip:'d74a3ed-8dfd-4769-b298-5d69f8f2589',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:146px;width:452px;height:24px;',
			width: 452,
			height: 24,
			items:
			[
				{
					text:'Показать историю ...',
					tooltip:'d74a3ed-8dfd-4769-b298-5d69f8f2589',
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
			name: 'НадписьНомерДоговора1',
			text: 'Договор №:',
			style: 'position:absolute;left:6px;top:29px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт1',
			text: 'от:',
			style: 'position:absolute;left:174px;top:29px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала1',
			text: 'Действует с:',
			style: 'position:absolute;left:6px;top:52px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо1',
			text: 'по',
			style: 'position:absolute;left:174px;top:52px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьИспытательныйСрок1',
			text: 'Испытание на срок, мес.:',
			style: 'position:absolute;left:279px;top:52px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбособленноеПодразделение1',
			text: 'Обособл. подр.:',
			style: 'position:absolute;left:6px;top:75px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации1',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:98px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность1',
			text: 'Должность:',
			style: 'position:absolute;left:6px;top:121px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикРаботы1',
			text: 'График работы:',
			style: 'position:absolute;left:6px;top:144px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаТарифнойСтавки1',
			text: 'Валюта:',
			style: 'position:absolute;left:220px;top:210px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета1',
			text: 'Вид расчета:',
			style: 'position:absolute;left:11px;top:187px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавка1',
			text: 'Тариф \ Оклад:',
			style: 'position:absolute;left:11px;top:210px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Основная оплата при приеме на работу',
			style: 'position:absolute;left:6px;top:167px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадбавкиПоТрудовомуДоговоруТекст1',
			text: 'Надбавки по трудовому договору ...',
			style: 'position:absolute;left:11px;top:233px;width:447px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТрудовойДоговор',
			text: 'Данные трудового договора при приеме сотрудника на работу',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДоговора1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:92px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДоговора1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:192px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:92px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:192px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИспытательныйСрок1',
			style: 'position:absolute;left:423px;top:52px;width:35px;height:19px;',
			width: 35,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗанимаемыхСтавок1',
			style: 'position:absolute;left:414px;top:144px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ГрафикРаботы1.Представление',
			width: 253,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:144px;width:253px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'ОбособленноеПодразделение1.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:75px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации1.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:98px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Должность1.Представление',
			width: 366,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:121px;width:366px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'ВалютаТарифнойСтавки1.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:265px;top:210px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'ВидРасчета1.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:187px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавка1',
			style: 'position:absolute;left:96px;top:210px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТарифныйРазряд1.Представление',
			width: 249,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:210px;width:249px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:338px;top:29px;width:28px;height:19px;text-align:left;',
		},
		{
			id: 'СписокДоговоровГПХ',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:266px;',
			height: 266,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'83',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'84',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'84',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'СуммаЗаРаботу',
					flex:1,
				},
				{
					text:'Валюта',
					width:'46',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Оплата',
					width:'120',
					dataIndex:'Оплата',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Номер','Дата','ДатаНачала','ДатаОкончания','СуммаЗаРаботу','Валюта','Оплата',]
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
						name:'Картинка',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'СуммаЗаРаботу',
					},
					{
						name:'Валюта',
					},
					{
						name:'Оплата',
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
						var грид = Ext.getCmp('СписокДоговоровГПХ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодИМНС1',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:226px;top:29px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Место работы',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Кадровые документы',
			style: 'position:absolute;left:6px;top:75px;width:452px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'МестоРаботыУпрУчет',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:48px;',
			height: 48,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Действует с',
					width:'84',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность.Представление',
					flex:1,
				},
				{
					text:'График работы',
					width:'120',
					dataIndex:'ГрафикРаботы.Представление',
					flex:1,
				},
				{
					text:'Занимаемых ставок',
					width:'42',
					dataIndex:'ЗанимаемыхСтавок',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Период','Подразделение','Должность.Представление','ГрафикРаботы.Представление','ЗанимаемыхСтавок',]
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
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ГрафикРаботы',
					},
					{
						name:'ЗанимаемыхСтавок',
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
						var грид = Ext.getCmp('МестоРаботыУпрУчет');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:91px;width:452px;height:24px;',
			width: 452,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Провести',
					tooltip:'Провести',
					iconCls:'x-Post',
				},
				{
					text:'Отмена проведения',
					tooltip:'Отмена проведения',
					iconCls:'x-UndoPosting',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
					tooltip:'Ввести на основании',
				},
					]
				},
				'-',
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
			]
		},
		{
			id: 'КадровыеДокументыУпрУчет',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:115px;width:452px;height:157px;',
			height: 157,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','ВидДокумента','Дата','Номер',]
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
						name:'Картинка',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
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
						var грид = Ext.getCmp('КадровыеДокументыУпрУчет');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтрНомер1',
			text: 'Страховой номер ПФР:',
			style: 'position:absolute;left:226px;top:6px;width:140px;height:19px;',
		},
		{
			id: 'СвойстваИЗначения1',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:223px;height:249px;',
			height: 249,width: 223,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Свойство','Значение',]
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
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСвойства1',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:59px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:21px;top:112px;width:95px;height:24px;',
			width: 95,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'Категории1',
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:23px;width:223px;height:249px;',
			height: 249,width: 223,
			columns:
			[
				{
					text:'Принадлежность',
					width:'26',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'100',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
					fields: ['Ссылка','Родитель.Представление','Принадлежность','Категория',]
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
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории1',
			text: 'Категории',
			style: 'position:absolute;left:235px;top:6px;width:71px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:25px;top:148px;width:91px;height:24px;',
			width: 91,
			height: 24,
			items:
			[
				{
					text:'&Добавить новую категорию',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа1',
			text: 'Группа сотрудника:',
			style: 'position:absolute;left:0px;top:421px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидДоговора1.Представление',
			width: 250,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:46px;width:250px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'ВидЗанятости1.Представление',
			width: 250,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:95px;width:250px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
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
			name: 'Организация1.Представление',
			width: 250,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:71px;width:250px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код1',
			width: 100,
			height: 19,
			style: 'position:absolute;left:84px;top:23px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель1.Представление',
			width: 363,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:103px;top:421px;width:363px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СотрудникиОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПередставлениеНаименования1',
			width: 237,
			height: 19,
			style: 'position:absolute;left:84px;top:0px;width:237px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАктуальностьСотрудника',
			text: ' Сотрудник помещен в архив',
			style: 'position:absolute;left:189px;top:23px;width:170px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'СменитьФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:339px;top:0px;width:127px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:0px;width:50px;height:25px;',
			width: 50,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Переключить видимость справки формы',
					tooltip:'f5b2958-2b60-4b7b-9357-9683d512666',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:481px;width:700px;height:25px;',
			width: 700,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});