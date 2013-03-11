Ext.define('Отчеты.ОборотноСальдоваяВедомостьМеждународный.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 604,
	iconCls: 'bogus',
	title: 'Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
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
					text:'ВосстановитьЗначения',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Подменю',
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
			style: 'position:absolute;left:365px;top:33px;width:231px;height:19px;',
		},
	]
});