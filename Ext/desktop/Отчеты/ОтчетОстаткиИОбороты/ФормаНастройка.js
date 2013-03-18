Ext.define('Отчеты.ОтчетОстаткиИОбороты.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:488px;height:326px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:282px;',
			height: 282,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:8px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:166px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода1',
			text: '...',
			style: 'position:absolute;left:266px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:176px;width:460px;height:80px;',
			height: 80,width: 460,
			columns:
			[
				{
					text:'',
					width:'23',
				},
				{
					text:'Показатель',
					width:'177',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:152px;width:286px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:12px;top:96px;width:160px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить итоги по всем уровням',
			style: 'position:absolute;left:12px;top:116px;width:196px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить в разных колонках',
			style: 'position:absolute;left:294px;top:157px;width:172px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:460px;height:25px;',
			height: 25,width: 460,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:0px;width:382px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра1',
			text: 'Раздел учета:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:12px;top:76px;width:433px;height:20px;',
			height: 20,width: 433,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:0px;top:0px;width:208px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:232px;',
			height: 232,width: 460,
			columns:
			[
				{
					text:'Группировки строк',
					width:'135',
				},
				{
					text:'Тип',
					width:'61',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:232px;',
			height: 232,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'120',
				},
				{
					text:'По',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить дополнительные поля в отдельной колонке',
			style: 'position:absolute;left:6px;top:6px;width:296px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:460px;height:206px;',
			height: 206,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:232px;',
			height: 232,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Направление сортировки',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:300px;width:488px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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