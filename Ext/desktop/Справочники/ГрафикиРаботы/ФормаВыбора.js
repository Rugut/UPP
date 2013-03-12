Ext.define('Справочники.ГрафикиРаботы.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Графики работы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:280px;',
			height: 280,width: 400,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вид графика',
					width:'120',
				},
				{
					text:'Суммированный учет рабочего времени',
					width:'60',
				},
				{
					text:'Первый выходной',
					width:'120',
				},
				{
					text:'Второй выходной',
					width:'120',
				},
				{
					text:'Дата отсчета',
					width:'80',
				},
				{
					text:'Длительность рабочей недели',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
			]
		},
	]
});