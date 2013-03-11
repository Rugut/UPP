Ext.define('Отчеты.ТехнологическийАнализБухгалтерскогоУчета.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 670,
	iconCls: 'bogus',
	title: 'Технологический анализ бухгалтерского учета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'КнопкаНастройка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Очистить',
				},
				{
					text:'Очистить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
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
				{
					text:'Разделитель3',
				},
				{
					text:'Сравнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:64px;width:654px;height:305px;',
			height: 305,width: 654,
			items:
			[
				{
					title:'ТехАнализБУ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:363px;top:37px;width:288px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:254px;top:37px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:25px;top:37px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:229px;top:37px;width:21px;height:19px;',
		},
	]
});