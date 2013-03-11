Ext.define('Отчеты.ОборотноСальдоваяВедомостьХозрасчетный.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 556,width: 922,
	iconCls: 'bogus',
	title: 'Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:922px;height:25px;',
			items:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Действие1',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Настройка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:173px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:365px;top:33px;width:549px;height:19px;',
		},
	]
});