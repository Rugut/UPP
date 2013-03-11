Ext.define('Отчеты.ВедомостьВозвратнаяТара.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 448,width: 604,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Подменю',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие3',
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
	]
});