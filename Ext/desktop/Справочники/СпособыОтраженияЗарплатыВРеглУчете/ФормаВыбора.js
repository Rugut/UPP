Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 748,
	iconCls: 'bogus',
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:33px;width:557px;height:280px;',
			height: 280,width: 557,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СпособРаспределенияЗатрат',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'СчетНУ',
				},
				{
					text:'СубконтоДтНУ1',
				},
				{
					text:'СубконтоДтНУ2',
				},
				{
					text:'СубконтоДтНУ3',
				},
				{
					text:'СчетКтНУ',
				},
				{
					text:'СубконтоКтНУ1',
				},
				{
					text:'СубконтоКтНУ2',
				},
				{
					text:'СубконтоКтНУ3',
				},
				{
					text:'ОтражениеВУСН',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:748px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:169px;height:280px;',
			height: 280,width: 169,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});