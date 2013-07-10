Ext.define('Справочники.Вакансии.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:811px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вакансия',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:656px;top:33px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 98,
			height: 19,
			style: 'position:absolute;left:705px;top:33px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:105px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 248,
			height: 19,
			style: 'position:absolute;left:148px;top:105px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Должность',
			width: 248,
			height: 19,
			style: 'position:absolute;left:148px;top:33px;width:248px;height:19px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Закрыта',
			labelWidth: 50,
			style: 'position:absolute;left:656px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:388px;height:24px;',
			height: 24,width: 388,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По структуре юридических лиц',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 248,
			height: 19,
			style: 'position:absolute;left:140px;top:0px;width:248px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 248,
			height: 19,
			style: 'position:absolute;left:148px;top:81px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлановаяДатаЗакрытия',
			text: 'Плановая дата закрытия:',
			style: 'position:absolute;left:415px;top:57px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПлановаяДатаЗакрытия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:555px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:415px;top:81px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОтветственныйЗаВакансию',
			width: 248,
			height: 19,
			style: 'position:absolute;left:555px;top:81px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявитель',
			text: 'Заявитель:',
			style: 'position:absolute;left:415px;top:106px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Заявитель',
			width: 248,
			height: 19,
			style: 'position:absolute;left:555px;top:106px;width:248px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Требования',
			style: 'position:absolute;left:8px;top:216px;width:795px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТребования',
			text: 'Требования:',
			style: 'position:absolute;left:8px;top:197px;width:795px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбязанности',
			text: 'Обязанности:',
			style: 'position:absolute;left:8px;top:286px;width:388px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Обязанности',
			style: 'position:absolute;left:8px;top:305px;width:388px;height:70px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Условия',
			style: 'position:absolute;left:415px;top:305px;width:388px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловия',
			text: 'Условия:',
			style: 'position:absolute;left:415px;top:286px;width:388px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Описание вакансии',
			style: 'position:absolute;left:8px;top:130px;width:795px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОткрытия',
			text: 'Дата открытия:',
			style: 'position:absolute;left:415px;top:33px;width:135px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОткрытия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:555px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаЗакрытия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:723px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Соответствует описанию должности',
			style: 'position:absolute;left:8px;top:150px;width:795px;height:20px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Произвольное',
			style: 'position:absolute;left:8px;top:171px;width:795px;height:20px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:811px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:811px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});