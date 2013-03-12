Ext.define('Справочники.СпособыОтраженияРасходовПоАмортизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:180px;',
			height: 180,width: 588,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'222',
				},
				{
					text:'Организация',
					width:'90',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'232',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:588px;height:154px;',
			height: 154,width: 588,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'97',
				},
				{
					text:'Счет затрат',
					width:'83',
				},
				{
					text:'Счет затрат (НУ)',
					width:'83',
				},
				{
					text:'Характер затрат',
					width:'74',
				},
				{
					text:'Вид аналитики',
					width:'102',
				},
				{
					text:'Вид аналитики (доп)',
					width:'102',
				},
				{
					text:'Вид субконто 1',
					width:'69',
				},
				{
					text:'Вид субконто 2',
					width:'69',
				},
				{
					text:'Вид субконто 3',
					width:'69',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
				},
				{
					text:'Аналитика',
					width:'99',
				},
				{
					text:'Номенклатурная группа',
					width:'99',
				},
				{
					text:'Субконто 1',
					width:'99',
				},
				{
					text:'Субконто 2',
					width:'99',
				},
				{
					text:'Субконто 3',
					width:'99',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'99',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'99',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'99',
				},
				{
					text:'Продукция',
					width:'99',
				},
				{
					text:'Характеристика продукции',
					width:'99',
				},
				{
					text:'Серия продукции',
					width:'99',
				},
				{
					text:'Объект строительства',
					width:'99',
				},
				{
					text:'Способ строительства',
					width:'100',
				},
				{
					text:'Коэффициент',
					width:'102',
				},
			]
		},
	]
});