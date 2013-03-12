Ext.define('Справочники.СтепениРодстваФизЛиц.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:518px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Степени родства физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:502px;height:280px;',
			height: 280,width: 502,
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
			style: 'position:absolute;left:0px;top:0px;width:518px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Подбор из ОКИН',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
			]
		},
	]
});