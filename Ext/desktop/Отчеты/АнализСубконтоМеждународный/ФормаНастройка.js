Ext.define('Отчеты.АнализСубконтоМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:236px;width:432px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:416px;height:220px;',
			height: 220,width: 416,
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
			style: 'position:absolute;left:88px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:270px;top:7px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:31px;width:200px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:266px;top:121px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по количеству',
			style: 'position:absolute;left:266px;top:141px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам',
			style: 'position:absolute;left:266px;top:76px;width:142px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:96px;width:242px;height:96px;',
			height: 96,width: 242,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид субконто',
					width:'191',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:72px;width:242px;height:24px;',
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
			style: 'position:absolute;left:6px;top:32px;width:402px;height:162px;',
			height: 162,width: 402,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:402px;height:24px;',
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
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:182px;height:146px;',
			height: 146,width: 182,
			columns:
			[
				{
					text:'Направление',
					width:'107',
				},
				{
					text:'Поле',
					width:'64',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:220px;top:48px;width:188px;height:146px;',
			height: 146,width: 188,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сортировать по:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:18px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:24px;width:182px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Направление',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ДобавитьСортировку',
			text: '',
			style: 'position:absolute;left:192px;top:68px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'УдалитьСортировку',
			text: '',
			style: 'position:absolute;left:192px;top:96px;width:24px;height:24px;',
		},
					]
				},
			]
		},
	]
});