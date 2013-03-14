Ext.define('Обработки.ТОВыгрузкаТСД.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка данных в ТСД',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:700px;height:25px;',
			items:
			[
				{
					text:'Выгрузить',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:226px;width:684px;height:139px;',
			height: 139,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Номенклатурная группа',
					width:'220',
				},
				{
					text:'Номенклатура',
					width:'250',
				},
				{
					text:'Штрихкод',
					width:'120',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Серия номенклатуры',
					width:'250',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Тип цен',
					width:'100',
				},
				{
					text:'Цена',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:201px;width:684px;height:24px;',
			items:
			[
				{
					text:'Выделить все',
				},
				{
					text:'Очистить выделение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:71px;width:684px;height:107px;',
			height: 107,width: 684,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'На складе:',
			style: 'position:absolute;left:6px;top:6px;width:145px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСклад',
			style: 'position:absolute;left:336px;top:6px;width:342px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип цен:',
			style: 'position:absolute;left:6px;top:31px;width:145px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиТипЦен',
			style: 'position:absolute;left:336px;top:31px;width:342px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:6px;top:56px;width:145px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:336px;top:56px;width:342px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатурная группа:',
			style: 'position:absolute;left:6px;top:81px;width:145px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиГруппа',
			style: 'position:absolute;left:336px;top:81px;width:342px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Терминал сбора данных:',
			style: 'position:absolute;left:8px;top:28px;width:128px;height:15px;text-align:left;',
		},
	]
});