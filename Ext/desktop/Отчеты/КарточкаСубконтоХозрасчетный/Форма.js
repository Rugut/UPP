Ext.define('Отчеты.КарточкаСубконтоХозрасчетный.Форма',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 628,
	iconCls: 'bogus',
	title: 'Отчет  Карточка субконто',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Настройка',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Выполнить',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
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
			name: 'Организация',
			style: 'position:absolute;left:356px;top:33px;width:264px;height:19px;',
		},
	]
});