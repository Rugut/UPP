Ext.define('Справочники.ЗаявкиКандидатов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 665,
	iconCls: 'bogus',
	title: 'Кандидат',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:665px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:665px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:392px;top:35px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:35px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:200px;width:341px;height:163px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РезультатЗакрытия',
			style: 'position:absolute;left:366px;top:507px;width:291px;height:40px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:490px;top:438px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаЗадач',
			style: 'position:absolute;left:490px;top:414px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникИнформации',
			style: 'position:absolute;left:490px;top:390px;width:167px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:63px;width:649px;height:127px;',
			height: 127,width: 649,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:421px;top:28px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОткрытия',
			style: 'position:absolute;left:520px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Важность',
			style: 'position:absolute;left:421px;top:52px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вакансия',
			style: 'position:absolute;left:111px;top:28px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:111px;top:52px;width:230px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:76px;width:335px;height:24px;',
			height: 24,width: 335,
			items:
			[
				{
					title:'Организация',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:105px;top:0px;width:230px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:111px;top:100px;width:230px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:390px;width:341px;height:157px;',
			height: 157,width: 341,
			columns:
			[
				{
					text:'ВидДокумента',
				},
				{
					text:'ЕстьВложения',
				},
				{
					text:'ДатаКонтакта',
				},
				{
					text:'Тема',
				},
				{
					text:'ОтправительИмя',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОткрытьРезюме',
			text: 'Открыть резюме',
			style: 'position:absolute;left:490px;top:33px;width:167px;height:24px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:490px;top:462px;width:167px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:366px;top:220px;width:291px;height:144px;',
			height: 144,width: 291,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'Описание',
				},
				{
					text:'Состояние',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:16px;top:500px;width:251px;height:24px;',
			items:
			[
				{
					text:'ЗарегистрироватьРезультат',
				},
			]
		},
	]
});