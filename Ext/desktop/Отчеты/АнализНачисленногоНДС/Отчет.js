Ext.define('Отчеты.АнализНачисленногоНДС.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 447,width: 604,
	iconCls: 'bogus',
	title: 'Анализ начисленного НДС по операциям реализации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:366px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка',
				},
				{
					text:'Настройка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
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