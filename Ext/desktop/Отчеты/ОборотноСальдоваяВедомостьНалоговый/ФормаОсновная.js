Ext.define('Отчеты.ОборотноСальдоваяВедомостьНалоговый.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 567,width: 921,
	iconCls: 'bogus',
	title: 'Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:921px;height:25px;',
			items:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Действие3',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
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
			style: 'position:absolute;left:365px;top:33px;width:412px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:852px;top:33px;width:62px;height:19px;',
		},
	]
});