Ext.define('Справочники.ГрафикиРаботы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:388px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Графики работы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:372px;height:280px;',
			height: 280,width: 372,
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
					text:'Тип графика',
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
			style: 'position:absolute;left:0px;top:0px;width:388px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});