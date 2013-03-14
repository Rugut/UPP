Ext.define('Справочники.СотрудникиОрганизаций.ФормаПерсональныеНадбавки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:424px;height:279px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:424px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:31px;width:408px;height:216px;',
			height: 216,width: 408,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Надбавка',
					width:'120',
				},
				{
					text:'Показатели для расчета начисления',
					width:'245',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта1',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 1',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта2',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 3',
					width:'75',
				},
				{
					text:'Валюта3',
					width:'50',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта4',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта5',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта6',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:254px;width:424px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});