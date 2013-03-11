Ext.define('Отчеты.ФинансовыйАнализДанныхБюджетирования.ФормаФинансовыйАнализ',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 654,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие3',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:114px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВариантНастройки',
			style: 'position:absolute;left:114px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:412px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:528px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:626px;top:33px;width:20px;height:19px;',
		},
	]
});