Ext.define('Обработки.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	height: 418,width: 646,
	iconCls: 'bogus',
	title: 'Индексация и перерасчет государственных пособий гражданам, имеющим детей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:646px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Выполнить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:630px;height:377px;',
			height: 377,width: 630,
			items:
			[
				{
					title:'СтраницаИндексирование',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:124px;width:213px;height:135px;',
			height: 135,width: 213,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'Процент',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:220px;top:124px;width:410px;height:135px;',
			height: 135,width: 410,
			columns:
			[
				{
					text:'ВидПособия',
				},
				{
					text:'Размер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:99px;width:213px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:165px;width:213px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'СтраницаПерерасчетПособий',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:185px;top:35px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкончаниеПериода',
			style: 'position:absolute;left:333px;top:35px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:89px;width:630px;height:160px;',
			height: 160,width: 630,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:43px;width:630px;height:117px;',
			height: 117,width: 630,
			columns:
			[
				{
					text:'Колонка',
				},
				{
					text:'Отметка',
				},
				{
					text:'Группа',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ВидПособия',
				},
				{
					text:'Период',
				},
				{
					text:'СуммаНачисленная',
				},
				{
					text:'СуммаКДоначислению',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:483px;top:19px;width:147px;height:24px;',
			items:
			[
				{
					text:'ПометитьВсе',
				},
				{
					text:'СнятьПометки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:519px;top:19px;width:111px;height:24px;',
			items:
			[
				{
					text:'ПометитьВсе',
				},
				{
					text:'СнятьПометки',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:0px;top:0px;width:116px;height:35px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:277px;width:630px;height:76px;',
			height: 76,width: 630,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:76px;',
			height: 76,width: 630,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ДокументИсправление',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:322px;top:0px;width:202px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Провести',
				},
				{
					text:'Открыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:185px;top:61px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});