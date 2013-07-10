Ext.define('Обработки.ИзменениеНастроекУчета.ИспользованиеПартионногоУчетаПоСкладамРегл',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:415px;height:116px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметра учета',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет себестоимости МПЗ по складам в регламентированном учете',
			style: 'position:absolute;left:8px;top:5px;width:399px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Значение данной настройки влияет на ведение суммового учета для субконто "Склады" на счетах учета ТМЦ.\r\nИзменение данной настройки может занять продолжительное время.',
			style: 'position:absolute;left:48px;top:38px;width:359px;height:45px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:415px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить настройку',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});