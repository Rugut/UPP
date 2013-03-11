Ext.define('Отчеты.КарточкаСчетаХозрасчетный.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 628,
	iconCls: 'bogus',
	title: 'Отчет  Карточка счета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Настройка',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие1',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'ВосстановитьЗначения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач1',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон1',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:322px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:500px;top:33px;width:120px;height:19px;',
		},
	]
});