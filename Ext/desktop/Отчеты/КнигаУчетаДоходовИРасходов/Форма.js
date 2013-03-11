Ext.define('Отчеты.КнигаУчетаДоходовИРасходов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 428,width: 652,
	iconCls: 'bogus',
	title: 'Книга учета доходов и расходов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Действие',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'ВосстановитьЗначения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:636px;height:312px;',
			height: 312,width: 636,
			items:
			[
				{
					title:'ТитульныйЛист',
				},
				{
					title:'Раздел1',
				},
				{
					title:'РасходыНаПриобретениеОсновныхСредств',
				},
				{
					title:'Раздел3',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:162px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:306px;top:33px;width:20px;height:19px;',
		},
	]
});