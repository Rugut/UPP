Ext.define('Обработки.ГрафикЗаказов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 840,
	iconCls: 'bogus',
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:158px;width:827px;height:71px;',
			height: 71,width: 827,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:16px;top:132px;width:515px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:221px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:432px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:221px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:429px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'График',
			style: 'position:absolute;left:388px;top:90px;width:248px;height:21px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:840px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:643px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:643px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
	]
});