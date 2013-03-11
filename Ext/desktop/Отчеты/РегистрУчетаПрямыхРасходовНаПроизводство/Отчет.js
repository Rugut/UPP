Ext.define('Отчеты.РегистрУчетаПрямыхРасходовНаПроизводство.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 604,
	iconCls: 'bogus',
	title: 'Регистр учета прямых расходов на производство',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:370px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Настройка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:170px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:252px;top:33px;width:20px;height:19px;',
		},
	]
});