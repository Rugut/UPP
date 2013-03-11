Ext.define('Отчеты.ИнвентарнаяКнигаОС.Форма',
	{
	extend: 'Ext.window.Window',
	height: 451,width: 674,
	iconCls: 'bogus',
	title: 'Инвентарная книга ОС (управленческий учет)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:674px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:63px;top:34px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:168px;top:34px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:34px;width:19px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:134px;width:658px;height:309px;',
			height: 309,width: 658,
			items:
			[
				{
					title:'ВсеСтраницы',
				},
				{
					title:'Обложка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:110px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛ',
			style: 'position:absolute;left:110px;top:107px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:446px;top:82px;width:220px;height:19px;',
		},
	]
});