Ext.define('Справочники.Вакансии.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:811px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вакансия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:811px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Редактировать код',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:811px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:656px;top:33px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:705px;top:33px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:105px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:105px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:148px;top:33px;width:248px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрыта',
			style: 'position:absolute;left:656px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:388px;height:24px;',
			height: 24,width: 388,
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
			style: 'position:absolute;left:0px;top:0px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
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
			style: 'position:absolute;left:8px;top:81px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:148px;top:81px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлановаяДатаЗакрытия',
			text: 'Плановая дата закрытия:',
			style: 'position:absolute;left:415px;top:57px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПлановаяДатаЗакрытия',
			style: 'position:absolute;left:555px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:415px;top:81px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаВакансию',
			style: 'position:absolute;left:555px;top:81px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявитель',
			text: 'Заявитель:',
			style: 'position:absolute;left:415px;top:106px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заявитель',
			style: 'position:absolute;left:555px;top:106px;width:248px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
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
			name: 'Обязанности',
			style: 'position:absolute;left:8px;top:305px;width:388px;height:70px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
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
			xtype: 'label',
			name: 'НадписьДатаОткрытия',
			text: 'Дата открытия:',
			style: 'position:absolute;left:415px;top:33px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОткрытия',
			style: 'position:absolute;left:555px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗакрытия',
			style: 'position:absolute;left:723px;top:57px;width:80px;height:19px;',
		},
	]
});