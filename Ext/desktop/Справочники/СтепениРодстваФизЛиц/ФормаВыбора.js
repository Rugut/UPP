Ext.define('Справочники.СтепениРодстваФизЛиц.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:457px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Степени родства физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:442px;height:220px;',
			height: 220,width: 442,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Подбор из ОКИН',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие формы выбрать',
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
				'-',
				'-',
			]
		},
	]
});