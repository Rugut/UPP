Ext.require(['Данные.Справочники.НалоговыеОрганы'], function () 
{
	Ext.define('Справочники.НалоговыеОрганы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:483px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Налоговые органы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 48,
			height: 19,
			style: 'position:absolute;left:149px;top:33px;width:48px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 537,
			height: 19,
			style: 'position:absolute;left:149px;top:58px;width:537px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Вышестоящий НО:',
			style: 'position:absolute;left:8px;top:133px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель.Представление',
			width: 537,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:149px;top:133px;width:537px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НалоговыеОрганы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НалоговыеОрганы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НалоговыеОрганы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НалоговыеОрганы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВид',
			text: 'Вид налогового органа:',
			style: 'position:absolute;left:8px;top:108px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Вид.Представление',
			width: 537,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:149px;top:108px;width:537px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НалоговыеОрганы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НалоговыеОрганы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НалоговыеОрганы.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НалоговыеОрганы.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПолноеНаименование',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:83px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолноеНаименование',
			width: 537,
			height: 19,
			style: 'position:absolute;left:149px;top:83px;width:537px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет налогоплательщиков',
			style: 'position:absolute;left:14px;top:330px;width:157px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Прием налоговой отчетности',
			style: 'position:absolute;left:188px;top:330px;width:173px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:181px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 104,
			height: 19,
			style: 'position:absolute;left:96px;top:181px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:220px;top:181px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 96,
			height: 19,
			style: 'position:absolute;left:265px;top:181px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес:',
			style: 'position:absolute;left:14px;top:229px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Адрес',
			width: 590,
			height: 19,
			style: 'position:absolute;left:96px;top:229px;width:590px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:14px;top:254px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 290,
			height: 19,
			style: 'position:absolute;left:96px;top:254px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочты',
			text: 'E-mail:',
			style: 'position:absolute;left:399px;top:254px;width:36px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочты',
			width: 244,
			height: 19,
			style: 'position:absolute;left:442px;top:254px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресСайта',
			text: 'Web-сайт:',
			style: 'position:absolute;left:14px;top:279px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресСайта',
			width: 590,
			height: 19,
			style: 'position:absolute;left:96px;top:279px;width:590px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:431px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 590,
			height: 19,
			style: 'position:absolute;left:96px;top:431px;width:590px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:694px;height:25px;',
			width: 694,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Реквизиты',
			style: 'position:absolute;left:8px;top:159px;width:678px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Контакты',
			style: 'position:absolute;left:8px;top:206px;width:678px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:424px;width:678px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Функции',
			style: 'position:absolute;left:8px;top:305px;width:678px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Информационное взаимодействие с налогоплательщиками по каналам связи (защищенный документооборот)',
			style: 'position:absolute;left:8px;top:352px;width:678px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочты1',
			text: 'Адрес электронной почты:',
			style: 'position:absolute;left:14px;top:373px;width:157px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыДляПриемаОтчетности',
			width: 498,
			height: 19,
			style: 'position:absolute;left:188px;top:373px;width:498px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:14px;top:398px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сертификат',
			width: 498,
			height: 19,
			style: 'position:absolute;left:188px;top:398px;width:498px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:458px;width:694px;height:25px;',
			width: 694,
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