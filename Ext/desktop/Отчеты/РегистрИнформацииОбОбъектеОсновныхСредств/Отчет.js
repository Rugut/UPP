Ext.define('Отчеты.РегистрИнформацииОбОбъектеОсновныхСредств.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 409,width: 604,
	iconCls: 'bogus',
	title: 'Регистр информации об объекте основных средств',
	
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
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Подменю',
				},
				{
					text:'Сформировать',
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
			name: 'ОсновноеСредство',
			style: 'position:absolute;left:117px;top:57px;width:479px;height:19px;',
		},
	]
});