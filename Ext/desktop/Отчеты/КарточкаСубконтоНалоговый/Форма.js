Ext.define('Отчеты.КарточкаСубконтоНалоговый.Форма',
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
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Подменю',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Выполнить',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Настройка',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель1',
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
			style: 'position:absolute;left:356px;top:33px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:560px;top:33px;width:60px;height:19px;',
		},
	]
});