Ext.define('Справочники.СемейноеПоложениеФизЛиц.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:584px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Семейное положение физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:568px;height:280px;',
			height: 280,width: 568,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'21',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:584px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
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
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие4',
				},
			]
		},
	]
});