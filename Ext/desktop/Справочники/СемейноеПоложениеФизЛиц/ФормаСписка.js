Ext.define('Справочники.СемейноеПоложениеФизЛиц.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:526px;height:322px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Семейное положение физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:34px;width:510px;height:280px;',
			height: 280,width: 510,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие',
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
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Подбор из ОКИН',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});