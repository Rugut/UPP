Ext.define('Отчеты.ОборотноСальдоваяВедомостьБухМСФО.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 604,
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
					text:'Сформировать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие2',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:366px;top:33px;width:230px;height:19px;',
		},
	]
});